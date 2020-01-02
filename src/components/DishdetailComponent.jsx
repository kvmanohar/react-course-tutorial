import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb, Button } from 'reactstrap';
import SubmitCommentModal from './SubmitCommentsComponent';

import { Link } from 'react-router-dom';

const RenderDish = ({ dish }) => {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

const RenderComments = ({ comments }) => {

    const commentsOutput = comments.map((cItem) => {
        const formatedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cItem.date)))
        return (
            <div key={cItem.id}>
                <p>{cItem.comment}</p>
                <p>--{cItem.author}, {formatedDate}</p>
            </div>
        )
    })
    return (
        <div>
            <h2>Comments</h2>
            {commentsOutput}
        </div>
    )
}

const Dishdetails = (props) => {

    const [toggleModal, settoggleModal] = useState(false)

    const toggleModalHandler = () => {
        settoggleModal(!toggleModal)
    }

    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <Button outline onClick={toggleModalHandler}>
                            <span className="fa fa-pencil fa-lg" /> Submit Comment
                        </Button>
                        <SubmitCommentModal showModal={toggleModal} toggle={() => toggleModalHandler()}
                            dishId={props.dish.id}
                            addComment={props.addComment}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default Dishdetails
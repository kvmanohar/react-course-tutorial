import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
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
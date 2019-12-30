import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
                    <div key="0" className="col-sm-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div key="1" className="col-sm-5 m-1">
                        <RenderComments comments={props.dish.comments} />
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
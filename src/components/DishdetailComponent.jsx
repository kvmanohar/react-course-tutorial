import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const Dishdetails = (props) => {

    if (props.dish != null) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        const comments = props.dish.comments.map((cItem) => {
            const dt = new Date(cItem.date);

            return (
                <div key={cItem.id}>
                    <p>{cItem.comment}</p>
                    <p>--{cItem.author}, {monthNames[dt.getMonth()]} {dt.getDay()} , {dt.getFullYear()}</p>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div key="0" className="col-sm-5 m-1">
                        <Card>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div key="1" className="col-sm-5 m-1">
                        <h2>Comments</h2>
                        {comments}
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
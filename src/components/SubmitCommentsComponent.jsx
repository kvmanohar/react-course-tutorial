import React from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Button, Modal, ModalBody, ModalHeader, Label } from 'reactstrap';

const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length) >= len;

const SubmitCommentModal = (props) => {

    const handleSubmit = (values) => {
        props.toggle();
        props.postComment(props.dishId, values.rating, values.yourName, values.comment);
    }

    return (
        <Modal isOpen={props.showModal} toggle={props.toggle}>
            <ModalHeader>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select model=".rating" name="rating" className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Control.select>
                    <Label htmlFor="yourName">First Name</Label>
                    <Control.text model=".yourName" id="yourName" name="yourName"
                        placeholder="Your Name"
                        className="form-control"
                        validators={{
                            required, minLength: minLength(2)
                        }}
                    />
                    <Errors className="text-danger" model=".yourName" show="touched"
                        messages={{
                            required: 'Required ',
                            minLength: 'Must be greater than 2 characters'
                        }}
                    />
                    <Label htmlFor="comment">Comments</Label>
                    <Control.textarea model=".comment" id="comment" name="comment"
                        rows="6"
                        className="form-control"
                    />
                    <p></p>
                    <Button type="submit" color="primary">Submit</Button>
                </LocalForm>
            </ModalBody>
        </Modal>
    )
}

export default SubmitCommentModal;
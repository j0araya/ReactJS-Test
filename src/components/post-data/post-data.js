import React, { Component } from 'react';
import {
    Input, Form, FormGroup, Label, FormFeedback
} from 'reactstrap';
import autoBind from 'react-autobind';


class PostData extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        const { data = {}, error = {}, disable, handler } = this.props;
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title || ''}
                        onChange={handler}
                        disabled={disable}
                        invalid={!!(error && error.title)}>
                    </Input>
                    <FormFeedback invalid={error && error.title}> {error.title}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="title">Content</Label>
                    <Input
                        type="text"
                        id="content"
                        name="content"
                        value={data.content || ''}
                        onChange={handler}
                        disabled={disable}
                        invalid={!!(error && error.content)}>
                    </Input>
                    <FormFeedback invalid={error && error.content}> {error.content}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="title">Categories</Label>
                    <Input
                        type="text"
                        id="categories"
                        name="categories"
                        value={data.categories || ''}
                        onChange={handler}
                        disabled={disable}
                        invalid={!!(error && error.categories)}>
                    </Input>
                    <FormFeedback invalid={error && error.categories}> {error.categories}</FormFeedback>
                </FormGroup>
            </Form>
        )
    }
}

export default PostData;

import React, { Component } from 'react';
import {
  Container,
  Button,
} from 'reactstrap';

import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import PostData from '../../components/post-data/post-data';

import * as reducer from '../../store/post/reducer';
import * as actions from '../../store/post/actions';


class Post extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      post: {}
    };
  }
  componentDidMount() {
    const { match } = this.props;
    if (match.params && match.params.id) {
      this.props.dispatch(actions.get(match.params.id));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post !== this.props.post && this.props.post) {
      this.setState({ post: this.props.post });
    }
  }

  handlerData(e) {
    let temp = { ...this.state.post, ...{ [e.target.name]: e.target.value } };
    this.setState({
      post: temp
    });
  }

  buttonCreate() {
    return (
      <Button color="primary" onClick={() => this.submit()}>Create</Button>
    )
  }

  submit() {
    this.props.dispatch(actions.post(this.state.post)).then(_ => {
      this.props.history.goBack();
    });
  }

  render() {
    const { post = {} } = this.state;
    return (
      <Container>
        <Button onClick={this.props.history.goBack}>Back
                </Button>
        <br />
        <PostData
          data={post}
          handler={this.handlerData}
          disable={!!post.id}
        />

        {!post.id ? this.buttonCreate() : null}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const post = reducer.get(state);
  return {
    post,
  };
}

export default connect(mapStateToProps)(Post);



import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import * as actions from './store/post/actions';
import * as reducers from './store/post/reducer';
import autoBind from 'react-autobind';



import {
  Table,
  Button,
  Container,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';


class App extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      list: [],
      modal: false,
      selectedPost: {}
    };
    this.selectedPost = 0;
  }

  componentDidMount() {
    this.props.dispatch(actions.list());
  }

  buttonDelete(id) {
    return (
      <Button color="danger" onClick={() => this.selectItemToDelete(id)}>Delete</Button>
    )
  }

  buttonView(id) {
    return (
      <Button color="info" onClick={() => this.props.history.push('/post/' + id)}>View</Button>
    )
  }

  buttonCreate() {
    return (
      <Button color="primary" onClick={() => this.props.history.push('/post/')}>Create</Button>
    )
  }
  selectItemToDelete(id) {
    this.selectedPost = id;
    this.toggle();
  }

  removeItem() {
    this.props.dispatch(actions.remove(this.selectedPost));
    this.toggle();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // const { selectedPost } = this.state;
    const { posts = [] } = this.props;

    return (
      <div className="App">
        <Container>
          <Row>
            <Col className="text-right">
              {this.buttonCreate()}
            </Col>
          </Row>
          <Row>
            <Table striped hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Categories</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((p, i) => (
                  <tr key={p.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{p.title || 'unknown'}</td>
                    <td>{p.content || 'unknown'}</td>
                    <td>{p.categories || 'unknown'}</td>
                    <td>{this.buttonView(p.id)}</td>
                    <td>{this.buttonDelete(p.id)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="danger">
          <ModalHeader toggle={this.toggle}>DELETE</ModalHeader>
          <ModalBody>
             Are you sure to eliminate this item?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => this.removeItem()}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const posts = reducers.list(state);
  return {
    posts,
  };
}

export default connect(mapStateToProps)(App);
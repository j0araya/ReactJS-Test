import PostService from '../../service/post';
import * as types from './ActionTypes';


/*
 * creadores de acciones
 */

export function list() {
  return async (dispatch) => {
    try {
      const posts = await PostService.list();
      dispatch({
        type: types.LIST_POST,
        posts
      });
    } catch (error) {
      dispatch({ type: types.ERROR, error: error });
    }
  };
}

export function get(id) {
  return async (dispatch) => {
    try {
      const post = await PostService.get(id);
      dispatch({
        type: types.GET_POST,
        post
      });
    } catch (error) {
      dispatch({ type: types.ERROR, error: error });
    }
  };
}

export function remove(id) {
  return async (dispatch) => {
    try {
      const post = await PostService.remove(id);
      const posts = await PostService.list();
      dispatch({
        type: types.DELETE_POST,
        posts: posts,
        post
      });
    } catch (error) {
      dispatch({ type: types.ERROR, error: error });
    }
  }
}

export function post(data) {
  return async (dispatch) => {
    try {
      const post = await PostService.post(data);
      dispatch({
        type: types.POST_POST,
        post
      });
    } catch (error) {
      dispatch({ type: types.ERROR, error: error });
    }
  }
}

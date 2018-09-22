
import * as types from './ActionTypes';

const initialState = {
    posts: [],
    post: {},
    error: undefined,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_POST:
            return {
                ...state,
                post: action.post
            }
        case types.POST_POST:
            return {
                ...state,
                post: action.post
            }
        case types.DELETE_POST:
            return {
                ...state,
                post: action.post,
                posts: action.posts
            }
        case types.LIST_POST:
            return {
                ...state,
                posts: action.posts
            }
        case types.ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export function list(state = types.LIST_POST) {
    return state.posts;
}
export function get(state = types.GET_POST) {
    return state.post;
}

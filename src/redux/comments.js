import * as ActionTypes from './ActionTypes';
import { actionTypes } from 'react-redux-form';

export const Comments = (
	state = {
		errMsg: null,
		comments: []
	},
	action
) => {
	switch (action.type) {
		case actionTypes.ADD_COMMENTS:
			return { ...state, isLoading: false, errMsg: null, comments: action.payload };

		case actionTypes.COMMENTS_FAILED:
			return { ...state, isLoading: false, errMsg: action.payload, comments: [] };

		case ActionTypes.ADD_COMMENT:
			var comment = action.payload;
			comment.id = state.comments.length;
			comment.date = new Date().toISOString();
			return { ...state, comments: state.comments.concat(comment) };

		default:
			return state;
	}
};

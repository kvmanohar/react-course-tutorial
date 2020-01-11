import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment
	}
});

//Action Creators for Dishes
export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	return fetch(baseUrl + 'dishes')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ':' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errMsg = new Error(error.message);
				throw errMsg;
			}
		)
		.then((response) => response.json())
		.then((dishes) => dispatch(addDishes(dishes)))
		.catch((error) => dispatch(dieshesFailed(error.message)));
};

export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING
});

export const dieshesFailed = (errMsg) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errMsg
});

export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes
});

//Actions Creators For Comments
export const fetchComments = () => (dispatch) => {
	return fetch(baseUrl + 'comments')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ':' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errMsg = new Error(error.message);
				throw errMsg;
			}
		)
		.then((response) => response.json())
		.then((comments) => dispatch(addComment(comments)))
		.catch((error) => dispatch(commentsFailed(error)));
};

export const commentsFailed = (errMsg) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errMsg
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENTS,
	payload: comments
});

//Action Creators for Promos
export const fetchPromos = () => (dispatch) => {
	dispatch(promosLoading(true));

	return fetch(baseUrl + 'promotions')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ':' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errMsg = new Error(error.message);
				throw errMsg;
			}
		)
		.then((response) => response.json())
		.then((promos) => dispatch(addPromos(promos)))
		.catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
	type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMsg) => ({
	type: ActionTypes.PROMOS_FAILED,
	payload: errMsg
});

export const addPromos = (promos) => ({
	type: ActionTypes.ADD_PROMOS,
	payload: promos
});

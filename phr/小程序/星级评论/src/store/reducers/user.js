/*
 * @Author: i白描
 * @Date:   2018-12-21 09:16:12
 * @Last Modified by:   i白描
 * @Last Modified time: 2018-12-21 12:06:28
 */
import {
	handleActions
} from 'redux-actions'
import {
	GET_USERSAY_DATA,
	PUSH_USERSAY_DATA
} from '../types/user'

export default handleActions({
	[GET_USERSAY_DATA](state, action) {
		// console.log('action--', action.payload);
		return {
			...state,
			stausName: action.payload.name,
			userSays: action.payload.user_says,
			userSayNum: action.payload.user_says.length
		}
	},
	[PUSH_USERSAY_DATA](state, action) {
		console.log('action--腿的', action.payload, 'state---', state);
		return {
			...state,
			userSays: [...state.userSays, action.payload],
			userSayNum: ++state.userSayNum
		}
	}
}, {
	userSays: [],
	userSayNum: null,
	stausName: ''
})
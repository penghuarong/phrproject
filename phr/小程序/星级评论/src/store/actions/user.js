/*
 * @Author: i白描
 * @Date:   2018-12-21 09:13:27
 * @Last Modified by:   i白描
 * @Last Modified time: 2018-12-21 11:55:19
 */

import wepy from 'wepy';
import {
	GET_USERSAY_DATA,
	PUSH_USERSAY_DATA
} from '../types/user'
import {
	createAction
} from 'redux-actions'

export const getUserSay = createAction(
	GET_USERSAY_DATA,
	(url) => {
		return new Promise((resolve, reject) => {
			wepy.request({
				url,
				success: res => {
					resolve(res.data.mechat[0]);
				}
			})
		})
	}
)

export const pushUserSay = createAction(
	PUSH_USERSAY_DATA,
	(data) => {
		return new Promise((resolve, reject) => {
			resolve(data)
		})
	}
)
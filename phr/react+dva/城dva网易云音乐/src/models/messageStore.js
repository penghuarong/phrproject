import {getLoginApi} from '../services/loginApi';
import {getMymessageApi} from '../services/messageApi';

export default {
    namespace: 'messageStore',
    state: {
      id:0,
      messageData:{}
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *getMymessageId({ obj }, { call, put }) {  // eslint-disable-line
        let data=yield call(getLoginApi,obj);
        yield put({
          type:'getMymessageIdReduces',
          payload:data
        })
      },
      *getMymessage({ id }, { call, put }) {  // eslint-disable-line
        let data=yield call(getMymessageApi,id);
        yield put({
          type:'getMymessageReduces',
          payload:data
        })
      },
    },
  
    reducers: {
      getMymessageIdReduces (state,{payload}){
        return {
          ...state,
          id:payload.account.id
        }
      }, 
      getMymessageReduces (state,{payload}){
        return {
          ...state,
          messageData:payload
        }
      }
    },
  
  };
  
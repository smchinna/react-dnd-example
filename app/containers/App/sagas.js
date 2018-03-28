import {takeLatest,delay} from 'redux-saga';
import {call, put, take, select, cancelled, fork} from 'redux-saga/effects';
import data from '../Constants/data.json';
import { push } from "react-router-redux";

export function* watchLesson(){
    yield put({type:'INITIAL_DATA',payload:data})
    yield* takeLatest('REASSIGN_DETAIL',reAssignDetail)
}

export function* reAssignDetail(action) {
    try{
        yield put(push('/'));
        yield call({type:action.type,payload:action.payload})
        
    }  
    catch(e){
        console.log("error",e)
    }
}

export function* updateLesson(){
    try{
        yield* takeLatest('UPDATE_DETAIL',updateDetail)
    }
    catch(e){
        console.log("error",e)
    }
}

export function* updateDetail(action) {
    try{
        yield put(push('/tasty'))
        yield call({type:action.type,payload:action.payload})
    }  
    catch(e){
        console.log("error",e)
    }
}

export default [
    watchLesson,
    updateLesson
]
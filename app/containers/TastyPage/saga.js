import {takeLatest,delay} from 'redux-saga';
import {call, put, take, select, cancelled, fork} from 'redux-saga/effects';
import { push } from "react-router-redux";

export function* watchLesson(){
    yield put({type:'INITIAL_DATA',payload:"chinna"})
}

export default [
    watchLesson
]
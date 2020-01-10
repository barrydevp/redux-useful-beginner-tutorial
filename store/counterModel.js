import { put, delay } from "redux-saga/effects";

const reducers = {
  increment: (state, action) => {
    return state + 1;
  },
  decrement: (state, action) => {
    return state - 1;
  }
};

const sagas = {
  incrementAsync: function* (){
    yield delay(1000);
    yield put({type: "counter/increment"});
  }
};

export default {
  namespace: "counter", // is prefix of your reducer
  state: 0, // default state
  sagas,
  reducers
};
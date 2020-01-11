import { createStoreFul } from "redux-useful";
import counterModel from "./counterModel.js";

const models = { counter: counterModel };

const { store } = createStoreFul(models, {
  reduxPersist: false
});

export default store;

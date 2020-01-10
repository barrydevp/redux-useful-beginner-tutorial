import { createStoreFul } from "../build/index";
import counterModel from "./counterModel.js";

const models = { counter: counterModel };

const { store } = createStoreFul(models, {
  reduxPersist: false
});

export default store;
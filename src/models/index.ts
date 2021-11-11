import { createStore } from '@modern-js/runtime/model';
import globalModel from './global';

const store = createStore();

const [state, actions, subscribe] = store.use(globalModel);

subscribe(() => {
  console.log('state changed', store.use(globalModel)); // state changed {value: 2}
});

console.log(state); // {value: 1}

actions.add();

console.log(store.use(globalModel)[0]); // {value: 2}

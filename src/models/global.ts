import { model } from '@modern-js/runtime/model';

type State = {
  value: number;
};

export default model<State>('global').define({
  state: {
    value: 1,
  },
  actions: {
    add(draft) {
      draft.value += 1;
    },
  },
});

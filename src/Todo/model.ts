import { model } from '@modern-js/runtime/model';
import { get as concats } from '@api/contacts';

type State = {
  items: {
    avatar: string;
    name: string;
    email: string;
    archived?: boolean;
  }[];
  pending: boolean;
  error: null | Error;
};

export default model<State>('contacts').define({
  state: {
    items: [],
    pending: false,
    error: null,
  },
  computed: {
    archived: ({ items }: State) => items.filter(item => item.archived),
  },
  actions: {
    archive(draft, payload: string) {
      console.log('archive', payload);
      const target = draft.items.find(item => item.email === payload);
      if (target) {
        target.archived = true;
      }
    },
    load: {
      pending(draft) {
        console.log('pending', draft);
        draft.pending = true;
      },
      rejected(draft, payload) {
        draft.pending = false;
        draft.error = payload;
      },
      fulfilled(draft, p) {
        draft.items = p;
      },
    },
  },
  effects: {
    async load(name: string, age: number) {
      console.log('load', name, age);
      const { data } = await concats();
      return data;
    },
  },
});

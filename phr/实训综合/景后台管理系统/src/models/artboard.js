export default {
  namespace: "artboard",
  state: {},
  reducers: {},
  effects: {},
  subscriptions: {
    setUp({dispatch, history}) {
      return history.listen(({pathname, history}) => {
      })
    }
  }
}
module.exports = {
  path: 'dashboard',
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require("./components/Dashboard"))
    })
  },

  indexRoute: { onEnter: (nextState, replace) => replace('/app/dashboard/home') },
  //onEnter:requireAuth,
  getChildRoutes(partialNextState, cb) {
    require.ensure([], require => {
      cb(null, [
        require("./routes/home"),
      ])

    })
  }
}
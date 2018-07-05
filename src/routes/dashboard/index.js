module.exports =  {
  path:'dashboard', 
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) =>  {
      cb(null, [
        require('./routes/dashboardPage')
      ]); 
    }); 
  }, 
  indexRoute: {onEnter:(nextState, replace) => replace('/dashboard/home')}, 
  //onEnter:requireAuth,
  getComponent(nextState, cb) {
    require.ensure([], (require) =>  {
      cb(null, require('./components/DashboardPageApp')); 
    }); 
  }
}; 
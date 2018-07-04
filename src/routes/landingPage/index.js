module.exports =  {
  path:'landingPage', 
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) =>  {
      cb(null, [
        require('./routes/landingPage')
      ]); 
    }); 
  }, 
  indexRoute: {onEnter:(nextState, replace) => replace('/landingPage/home')}, 
  getComponent(nextState, cb) {
    require.ensure([], (require) =>  {
      cb(null, require('./components/LandingPageApp')); 
    }); 
  }
}; 

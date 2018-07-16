

module.exports = {
  path: 'sign-up',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/signup'),
        require('./routes/verify'),
        
      ]);
    });
  },
  indexRoute: { onEnter: (nextState, replace) => replace('/sign-up/main') },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/SignUp'))
      ; 
    }); 
  }
};
 
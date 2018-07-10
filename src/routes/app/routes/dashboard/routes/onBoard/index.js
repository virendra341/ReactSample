module.exports =  {
    path:'onBoard', 
    getComponent(nextState, cb) {
      require.ensure([], (require) =>  {
        cb(null, require('./components/OnBoard')); 
      }); 
    }
  }; 
  
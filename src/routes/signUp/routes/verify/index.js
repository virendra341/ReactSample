module.exports = {
    path: 'verify',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./components/VerifyPage'));
      });
    }
  };
  

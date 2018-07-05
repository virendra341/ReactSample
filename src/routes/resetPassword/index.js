module.exports = {
  path: 'reset-password',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ResetPasswordPage'));
    });
  }
};

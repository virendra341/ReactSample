module.exports = {
  path: 'forgot-password-email',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/ForgotPasswordEmailPage'));
    });
  }
};

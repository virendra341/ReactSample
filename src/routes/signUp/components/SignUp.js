import React, { PureComponent } from 'react'; 

class SignUp extends PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <div>
       {children}
      </div>
    );
  }
}

module.exports = SignUp;


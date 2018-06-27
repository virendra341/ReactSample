import React from 'react';

class ForgotPassowrd extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand
    };
  }

  render() {
    return (
      <div className="body-inner">
      </div>
    );
  }
}

const Page = () => (
  <div className="page-forgot">
    <div className="main-body">
      <div key="1">
        <ForgotPassowrd />
      </div>
    </div>
  </div>
);

module.exports = Page;


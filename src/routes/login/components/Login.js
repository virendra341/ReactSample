import React from 'react';

class Login extends React.Component {
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
  <div className="page-login">
    <div className="main-body">
      <div key="1">
        <Login />
      </div>
    </div>
  </div>
);

module.exports = Page;

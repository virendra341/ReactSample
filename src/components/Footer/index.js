import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <div>
        <footer className="bx-footer" style={{ textAlign: "center" }}>
          ---------------------------------------<br />
          Footer
          <span className="bx-copyright-text">&copy; 2018, Bixex.com</span>
        </footer>
      </div>
    );
  }
}

module.exports = Footer;

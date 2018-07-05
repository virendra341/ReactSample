import React, { PureComponent } from 'react'
import 'style/app.scss'

class App extends PureComponent {
  render() {
    return (
      <div>
            {this.props.children}
      </div>
    );
  }
}

module.exports = App;

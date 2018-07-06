
import React, { PureComponent } from 'react'

// custom
import 'style/layout.scss';
import 'style/theme.scss';
import 'style/ui.scss';
import 'style/app.scss';

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

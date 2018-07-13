import React, { PureComponent } from 'react'
import { Button, Card, CardContent, CardHeader, Typography, Grid } from '@material-ui/core'

import APPCONFIG from 'constants/Config'

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Grid item sm={3} className={this.props.error+' form-panel'}>
          <Card className="side-login-panel">
            <CardContent className="quad-content">
              <div className="error-icon">
                <img src="assets/images/error.png" />
                <Typography className="mrB15 mrT20" gutterBottom variant="headline" component="h2">
                  Something went wrong.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      )
    }
    return this.props.children;
  }
}

module.exports = ErrorBoundary;
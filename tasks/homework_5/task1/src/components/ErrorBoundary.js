import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }
  componentDidCatch(error, info) {
    console.log('info', info);
    console.log('error', error);

    this.setState({error});
  }

  render() {
    const {error} = this.state;
    const {children} = this.props;

    return (

      error
        ?<p>Array is empty</p>
        : children
    )
  }
}

export default ErrorBoundary

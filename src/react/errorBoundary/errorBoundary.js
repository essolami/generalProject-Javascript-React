import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('heeey');
    // Log the error to an error reporting service
    console.error('Error boundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      console.log('waaaaaaaaaaaaayh');
      // You can render any custom fallback UI
      return (
        <div>
          <h1 className="error-message">Something went wrong.</h1>
          <p className="error-details">
            Please refresh the page or try again later.
          </p>
        </div>
      );
    }
    // console.log('waaaaaaaaaaaaayh');
    return this.props.children;
  }
}

export default ErrorBoundary;

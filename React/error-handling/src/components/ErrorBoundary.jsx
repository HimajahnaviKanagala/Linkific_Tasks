import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-3xl font-bold text-red-500">
            Something went wrong
          </h1>
          <p className="text-gray-600 mt-2">Please refresh the page</p>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;

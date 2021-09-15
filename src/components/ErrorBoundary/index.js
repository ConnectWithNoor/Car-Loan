import React from 'react';
import { Link } from 'react-router-dom'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="flex items-center justify-center h-screen">
                    <h2>Something went wrong.</h2>
                    <p>Click here to go to
                        <Link to="/">
                            Home Page
                        </Link>
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { AppError } from '@/shared/ui';

interface ErrorBoundaryProps {
    children:ReactNode;
}

interface ErrorBoundaryState {
    hasError:boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log('ERROR:', error);
        // eslint-disable-next-line no-console
        console.log('ERROR_INFO:', errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return <Suspense fallback=""><AppError /></Suspense>;
        }

        return children;
    }
}

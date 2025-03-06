import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de error.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Puedes enviar el error a un servicio de reporte de errores
    console.error('Error no capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI en caso de error
      return <h1>Ha ocurrido un error inesperado.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React from 'react'

interface Props {
  children: React.ReactNode
  fallback: React.ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  // componentDidCatch(error, info) {
  // Example "componentStack":
  //   in ComponentThatThrows (created by App)
  //   in ErrorBoundary (created by App)
  //   in div (created by App)
  //   in App
  // logErrorToMyService(error, info.componentStack)
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}

// https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary

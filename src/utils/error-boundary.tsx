import React from "react";
import { Config } from "../config";

//convert this component to a typescript component
type Props = {
  children: React.ReactNode;
};
type State = {
  hasError: boolean;
  message: string | null;
  isProduction: boolean;
  error: Error | null;
};

// convert the following class component  to react functional component
export class CustomErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      message: null,
      isProduction: Config.isProduction,
      error: null,
    };
  }

  static getDerivedStateFromError(_: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: _.message, error: _ };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // alert(error.message);
  }

  render() {
    if (this.state.hasError) {
      if (!this.state.isProduction && this.state.error) {
        return (
          <div className="px-8 py-8">
            <h1>
              Something went wrong.: This Error will not be Show in Production
            </h1>
            <p>{this.state.error.name}</p>
            <p>{this.state.error.message}</p>
            <p>{this.state.error.stack}</p>
          </div>
        );
      }
    }

    return this.props.children;
  }
}

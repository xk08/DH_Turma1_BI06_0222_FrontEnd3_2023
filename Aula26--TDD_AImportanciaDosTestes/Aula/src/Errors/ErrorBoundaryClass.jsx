import React from "react";
import ErrorPage from "./ErrorPage";
import { toast } from "react-toastify";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            errorInfo: null,
        };
    }
    componentDidCatch(hasError, errorInfo) {

        toast("Ocorreu algum erro na aplicação");

        this.setState({
            hasError: hasError,
            errorInfo: errorInfo
        })
    }

    render() {

        if (this.state.hasError) {
            return (
                <ErrorPage
                    hasError={this.state.hasError}
                    errorInfo={this.state.errorInfo}
                />
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
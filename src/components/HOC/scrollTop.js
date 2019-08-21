import { Component } from 'react';

class ScrollTopHOC extends Component {
    componentDidMount() {
        document.documentElement.scrollTop = 60;
    }

    render() {
        return this.props.children;
    }
}

export default ScrollTopHOC;
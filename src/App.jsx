import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AuthorizationContainer, NotifiersContainer } from './containers';
import Content from './pages';
import { checkToken } from './actions';

class App extends Component{
	componentDidMount(){
		this.props.checkToken();
	}

	render(){
		const { auth } = this.props;
		return (
			<div className='container'>
				<NotifiersContainer />
				{auth ? <Content /> : <AuthorizationContainer /> }
			</div>
		)
	}
};

const mapStateToProps = ({authorization,}) => ({
	auth: authorization.auth,
});

const mapDispatchToProps = {
	checkToken
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
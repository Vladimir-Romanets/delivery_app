import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AuthorizationContainer, NotifiersContainer } from './containers';
import Content from './pages';
import { checkToken } from './actions';

const App = ({ auth, checkToken }) => {
	useEffect(() => {
		checkToken();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container'>
			<NotifiersContainer />
			{auth ? <Content /> : <AuthorizationContainer />}
		</div>
	)
};

const mapStateToProps = ({ authorization, }) => ({
	auth: authorization.auth,
});

const mapDispatchToProps = {
	checkToken
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
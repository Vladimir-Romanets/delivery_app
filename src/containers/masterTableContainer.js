import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { MasterTable } from '../components';

class MasterTableContainer extends Component {
	componentDidMount(){
		const { tableHeader } = this.props;
		if ( tableHeader === null ){
			this.props.getMasterTableHeader();
		}
	}

	componentWillUnmount(){
		this.props.masterTableReset();
	}

	render(){
		return <MasterTable { ...this.props } />
	}
};

const mapStateToProps = state => ({
	...state.masterTable
});

const mapDispatchToProps = {
	getMasterTableHeader: actions.getMasterTableHeader,
	masterTableGetEntry: actions.masterTableGetEntry,
	mtFetchEntryID: actions.mtFetchEntryID,
	mtEntrySearch: actions.mtEntrySearch,
	masterTableReset: actions.masterTableReset,
	mtEditableEntryClose: actions.mtEditableEntryClose,
	mtEditableEntrySave: actions.mtEditableEntrySave,
	mtEditableEntryDelete: actions.mtEditableEntryDelete,
	mtSelectItem: actions.mtSelectItem,
	mtSelectAllItem: actions.mtSelectAllItem,
	mtChangeService: actions.mtChangeService,
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterTableContainer);
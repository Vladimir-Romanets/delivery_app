import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { MasterTable } from '../components';

const {
	getMasterTableHeader,
	masterTableGetEntry,
	mtFetchEntryID,
	mtEditableEntryClose,
	mtEntrySearch,
	masterTableReset,
	mtEditableEntrySave,
	mtEditableEntryDelete,
	mtSelectItem,
	mtSelectAllItem,
	mtChangeService,
} = actions;

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
	getMasterTableHeader,
	masterTableGetEntry,
	mtFetchEntryID,
	mtEntrySearch,
	masterTableReset,
	mtEditableEntryClose,
	mtEditableEntrySave,
	mtEditableEntryDelete,
	mtSelectItem,
	mtSelectAllItem,
	mtChangeService,
};

export default connect(mapStateToProps, mapDispatchToProps)(MasterTableContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import get from 'lodash/get';

import {
	suggestionRequest,
	suggestionReset,
	entityFormAddValToHiddenField,
	entityFormSelectSuggestion
} from '../../actions';
import { SuggestionsList, getSuggestionValue } from './SuggestionsHelper';
import './style.css';

class AutoComplete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.initValue,
			entity: props.entity || ''
		};
	}

	onChange = (event, { newValue }) => {
		const entity = this.state.entity;
		const field = this.props.linkField;
		this.setState({
			value: newValue
		});
		field && this.props.entityFormAddValToHiddenField({entity, field, value: newValue});
	}

	onSuggestionsFetchRequested = ({value = ''}) => {
		const { entity } = this.state;
		this.props.suggestionRequest({
			entity,
			search: value.trim()
		});
	}

	suggestionsClearRequested = () => {
		this.props.suggestionReset();
	}

	onSuggestionSelected = (event, {suggestion, method}) => {
		const { entity } = this.state;
		if (method === 'click' && entity){
			this.props.entityFormSelectSuggestion({
				id: suggestion.id,
				entity
			});
		}
	}

	render() {
		const { value } = this.state;
		const { placeholder, suggestions } = this.props;
		const inputProps = {
			placeholder,
			value,
			onChange: this.onChange,
			onBlur: this.suggestionsClearRequested
		};
		return (
			<Autosuggest
				suggestions={suggestions}
				onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				onSuggestionSelected={this.onSuggestionSelected}
				onSuggestionsClearRequested={this.suggestionsClearRequested}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={SuggestionsList}
				inputProps={inputProps}
			/>
		);
	}
};

const mapStateToProps = ({autoSuggestion, form}, ownProps) => {
	const path = ownProps.formName ? `${ownProps.formName}.values` : 'addEntityForm.values';
	const storForm = get(form, path, {});
	const {entity, linkField} = ownProps;
	const obj = entity
		.split(".")
		.reduce((prev, next) => (prev && next in prev ? prev[next] : {}), storForm);
	const initValue = obj && obj[linkField] ? obj[linkField] : '';

	return {
		...ownProps,
		initValue,
		suggestions: autoSuggestion.suggestions,
		entityStore: autoSuggestion.entity
	}
};

const mapDispatchToProps = {
	suggestionRequest,
	suggestionReset,
	entityFormSelectSuggestion,
	entityFormAddValToHiddenField
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
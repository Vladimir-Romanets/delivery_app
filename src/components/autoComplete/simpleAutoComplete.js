import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

import actions from '../../actions';
import { SuggestionsList, getSuggestionValue } from './SuggestionsHelper';
import './style.css';

const {
    suggestionRequest,
    suggestionReset,
    entityFormAddValToHiddenField,
    entityFormSelectSuggestion
} = actions;


class SimpleAutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
        this.props.parentHandlerChange({value: newValue})
    }

    onSuggestionsFetchRequested = ({ value = '' }) => {
        const { entity } = this.props;
        this.props.suggestionRequest({
            entity,
            search: value.trim()
        });
    }

    suggestionsClearRequested = () => {
        this.props.suggestionReset();
    }

    onSuggestionSelected = (event, { suggestion, method }) => {
        const { entity, entityFormSelectSuggestion, parentHandlerChange } = this.props;
        if (method === 'click' && entity) {
            parentHandlerChange({ isSelected: true, value: suggestion.fio })
            entityFormSelectSuggestion({
                forForm: false,
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

const mapStateToProps = ({ autoSuggestion }) => ({
    suggestions: autoSuggestion.suggestions,
    entityStore: autoSuggestion.entity
});

const mapDispatchToProps = {
    suggestionRequest,
    suggestionReset,
    entityFormSelectSuggestion,
    entityFormAddValToHiddenField
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleAutoComplete);
import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import SelectField from '@material-ui/core/Select'
import Autosuggest from 'react-autosuggest'
import { renderInput, renderSuggestionsContainer, getSuggestionValue, renderSuggestion, styles } from '../autoComplete'
import Checkbox from '@material-ui/core/Checkbox'
import PasswordField from 'material-ui-password-field'

export const renderTextField = ({
    input,
    label,
    name,
    meta: { touched, error },
    ...custom
}) => (
        <Fragment>
            <TextField
                label={label}
                {...input}
                {...custom}
            />
            {touched && error && <span className="validation-error">{error}</span>}
        </Fragment>
    )

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <Fragment>
        <SelectField
            label={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom} />

        {touched && error && <span className="validation-error">{error}</span>}
    </Fragment>
)

export const renderAutoCompleteField = ({ handleSuggestionsFetchRequested, handleSuggestionsClearRequested, inputProps, suggestions, value, input, fields, label, meta: { touched, error }, children, ...custom }) => (

    <Autosuggest
        theme={{
            container: styles.container,
            suggestionsContainerOpen: styles.suggestionsContainerOpen,
            suggestionsList: styles.suggestionsList,
            suggestion: styles.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        {...input}
        label={label}
    />
)

export const renderCheckbox = ({ input, label, ...custom }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onChange={input.onChange}
        {...custom}
    />
)

export const renderPasswordField = ({
    input,
    //floatingLabelText,
    name,
    meta: { touched, error },
    ...custom
}) => (
        <Fragment>
            <PasswordField 
                //  floatingLabelText={floatingLabelText}
                {...input}
                {...custom}
            />
            {touched && error && <span className="validation-error">{error}</span>}
        </Fragment>
    )
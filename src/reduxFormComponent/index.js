/*
 * @Author: Virendra Patidar 
 * @Date: 2018-07-11 16:39:16 
 * @Last Modified by: Virendra Patidar
 * @Last Modified time: 2018-07-12 15:41:29
 */
import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import SelectField from '@material-ui/core/Select'
import Autosuggest from 'react-autosuggest'
import Checkbox from '@material-ui/core/Checkbox'

import PasswordField from './PasswordField'

import { renderInput, renderSuggestionsContainer, getSuggestionValue, renderSuggestion, styles } from './AutoComplete'

/**
 * Used for render text field
 * @param {*} param0 
 */
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


/**
 * Used for render select field
 * @param {*} param0 
 */
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

const onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    event.preventDefault()
};

/**
 * Used for render autocomplete field
 * @param {*} param0 
 */
export const renderAutoCompleteField = ({  handleSuggestionsFetchRequested, onSuggestionsClearRequested, inputProps, suggestions, value, input, fields, label, meta: { touched, error }, children, ...custom }) => (

    <Autosuggest
        renderInputComponent={renderInput}
        suggestions={suggestions}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        OnSuggestionSelected={onSuggestionSelected}
      
        inputProps={inputProps}
        {...input}
        label={label}
        {...custom} 
    />
)

/**
 * Used for render checkbox
 * @param {*} param0 
 */
export const renderCheckbox = ({ input, label, ...custom }) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onChange={input.onChange}
        {...custom}
    />
)

/**
 * Used for render password
 * @param {*} param0 
 */
export const renderPasswordField = ({
    input,
    name,
    placeholder,
    meta: { touched, error },
    ...custom
}) => (
        <Fragment>
            <PasswordField
                {...input}
                {...custom}
                placeholder={placeholder}
            />
            {touched && error && <span className="validation-error">{error}</span>}
        </Fragment>
    )
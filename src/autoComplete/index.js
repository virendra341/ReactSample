import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'

export const renderInput = (inputProps) => {
    const { classes,placeholder, ref, ...other } = inputProps;

    return (
        <TextField
            fullWidth
            label={placeholder}
            InputProps={{
                inputRef: ref,
                classes: {
                    //input: classes.input,
                },
                ...other,
            }}

        />
    );
}


export const renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => {
                    return part.highlight ? (
                        <span key={String(index)} style={{ fontWeight: 500 }}>
                            {part.text}
                        </span>
                    ) : (
                            <strong key={String(index)} style={{ fontWeight: 300 }}>
                                {part.text}
                            </strong>
                        );
                })}
            </div>
        </MenuItem>
    );
}


export const renderSuggestionsContainer = (options) => {
    const { containerProps, children } = options;

    return (
        <Paper {...containerProps} square>
            {children}
        </Paper>
    );
}

export const getSuggestionValue = (suggestion) => {
    return suggestion.name;
}


export const getSuggestions = (value, suggestions) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;

            if (keep) {
                count += 1;
            }

            return keep;
        });
}


export const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        height: 250,
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});
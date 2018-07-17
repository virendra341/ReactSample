import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';

const options = [
    'Show some love to Material-UI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
];

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing.unit * 2,
    },
});

class Notification extends PureComponent {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>

                <div>
                    <Button
                        buttonRef={node => {
                            this.anchorEl = node;
                        }}
                        aria-owns={open ? 'menu-list-grow' : null}
                        aria-haspopup="true"
                        onClick={this.handleToggle}
                        className="notification-btn"
                    >
                        <i className="material-icons">
                            notifications
                        </i>
                    </Button>
                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                id="menu-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleClose}>
                                        <MenuList>

                                            {options.map((option, index) => (
                                                <MenuItem
                                                    key={option}
                                                    disabled={index === 0}
                                                    selected={index === this.state.selectedIndex}
                                                    onClick={this.handleClose}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        );
    }
}

Notification.propTypes = {
    classes: PropTypes.object.isRequired,
};

module.exports = withStyles(styles)(Notification);
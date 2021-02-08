import React from 'react';
import {ButtonType} from './types';
import PropTypes from 'prop-types';
import style from './style.css';

export const Button = ({type, className,onClick, children, disabled}) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type : PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    type: ButtonType.BUTTON,
    onClick: () => {},
    className : "",
    disabled : false
};
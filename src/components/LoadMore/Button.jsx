import React from 'react';
import css from './BtnStyle.module.css';

const Button = ({onClick}) => {
    return (
        <div>
            <button type="button" className={css.loadMore} onClick={onClick}>Load more</button>
        </div>
        
    )
}

export default Button


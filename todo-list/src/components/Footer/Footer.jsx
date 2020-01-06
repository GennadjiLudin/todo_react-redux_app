import React from 'react';

import './Footer.scss';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    },
];

const Footer = ({amount, activeFilter, changeFilter}) => {
    return (
        <div className="footer">
            <div className="btn-group">
                {FILTERS_BTN.map(({text, id}) => (
                    <button 
                        onClick={() => changeFilter(id)}
                        key={id}
                        className={id === activeFilter ? "filter-btn active" : "filter-btn"}
                    >{text}</button>
                ))}
            </div>
            <span className="amount"> {`${amount} active tasks`} </span>
        </div>
    )
}

Footer.defaultProps = {
    amount: 0,
    text: 'Add todo',
    changeFilter: () => {},
}

export default Footer;
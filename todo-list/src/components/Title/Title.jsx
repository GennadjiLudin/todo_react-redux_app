import React from 'react';

import './Title.scss';


const Title = ({title}) => {
    return (
    <h1 className="title">{title}</h1>
    )
}

Title.defaultProps = {
    title: '',
}

export default Title;
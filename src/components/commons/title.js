import React from 'react'

function Title(props) {
    return (
        <div className="title">
            <div className="title__name">{props.name}</div>
            <div className="title__line"></div>
        </div>
    )
}

export default Title

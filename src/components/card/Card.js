import React, { Component } from 'react'

class Card extends Component {
    render() {
        const { id, name, email } = this.props.monster
        return (
            <div key={id} className='grid'>
                <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt={`monster ${name}`} />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        )
    }
}

export default Card
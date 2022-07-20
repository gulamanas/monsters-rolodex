// import React, { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ monster }) => {
    const { id, name, email } = monster;
    return (
        <Link to={`/monster/${id}`}>
            <div key={id} className='m-4 bg-cyan-400 rounded-lg p-3 hover:scale-110 transition-all duration-300 cursor-pointer'>
                <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt={`monster ${name}`} className='p-3' />
                <h2 className='text-lg font-medium'>{name}</h2>
                <p>{email}</p>
            </div>
        </Link>
    )
}

/* class Card extends Component {
    render() {
        const { id, name, email } = this.props.monster
        return (
            <div key={id} className='m-4 bg-cyan-300 rounded-lg p-3 hover:scale-110 transition-all cursor-pointer'>
                <img src={`https://robohash.org/${id}/?set=set2&size=180x180`} alt={`monster ${name}`} className='p-3' />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}
*/
export default Card
import React, { Component } from 'react'

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        // console.log(this.props)
        return (
            <div>
                {monsters.map(monster => (
                    <div key={monster.id}>
                        <img src={`https://robohash.org/${monster.id}/?set=set2&size=180x180`} alt={`monster ${monster.name}`} />
                        <h1>{monster.name}</h1>
                        <p>{monster.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList
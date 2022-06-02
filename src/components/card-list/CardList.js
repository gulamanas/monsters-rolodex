import React, { Component } from 'react'
import Card from '../card/Card'

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        // console.log(this.props)
        return (
            <div>
                {monsters.map(monster => {
                    return (
                        <Card key={monster.id} monster={monster} />
                    )
                })}
            </div>
        )
    }
}

export default CardList
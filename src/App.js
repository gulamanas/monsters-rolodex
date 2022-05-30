import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState(() => {
          return (
            { monsters: users }
          )
        })
      })
  }

  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter(monster => {
      // includes method returns true and is a case sensitive
      return monster.name.toLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input
          type="search"
          className='search-bar'
          placeholder='Search Monsters'
          onChange={(e) => {
            // console.log(e.target.value)
            const searchField = e.target.value.toLowerCase()
            this.setState(() => {
              // return { monsters: filteredMonsters }
              return { searchField }
            })
          }} />
        {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );

  }
}

export default App;

import { Component } from 'react'
import './App.css';
import CardList from './components/card-list/CardList';

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

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase()
    this.setState(() => {
      // return { monsters: filteredMonsters }
      return { searchField }
    })
  }

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      // includes method returns true and is a case sensitive
      return monster.name.toLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        <input
          type="search"
          className='search-bar'
          placeholder='Search Monsters'
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );

  }
}

export default App;

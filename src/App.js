import { Component } from 'react'
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBar from './components/search-bar/SearchBar';

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
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen text-center">
        <h1 className='text-blue-900 font-bold text-5xl text-center'>Monsters Rolodex</h1>
        <SearchBar
          className='mt-2 flex'
          placeholder='Search Monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} className='w-48 ' />
      </div >
    );

  }
}

export default App;

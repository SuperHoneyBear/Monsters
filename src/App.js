import { Component } from "react"
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
// import logo from './logo.svg';
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(e => {
        console.log(e)
      })
  }

  handleChange = (e) => {    //this.handleChange = this.handleChange.bind(this) dont need this if we use arrow function
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>monster rolodex</h1>
        <SearchBox placeholder='Search Box' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

      </div >
    );
  }
}


export default App;

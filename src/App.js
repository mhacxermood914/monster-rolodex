import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log(1)

    this.state = {
      monsters: [],
      searchField: [],
    }
  }

  componentDidMount(){
    console.log(2)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=>{
      this.setState(()=>{
        return {
          monsters: users
        }
      },()=>{
        console.log(this.state)
      })
    })
  }

  render(){
    console.log(3)
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField)) 
    return (
      <div className="App">
        <input className='search-box' type="search" placeholder='search monsters' onChange={(event)=>{
          console.log({event})
          const searchField = event.target.value.toLowerCase()

          this.setState(()=>{
            return {
              searchField
            }
          })
        }} />
        {
          filteredMonsters.map(monster=>{
            return (
              <div key={monster.id}>{monster.name}</div>
            )
          })
        }
      </div>
    )
  }
}

export default App;

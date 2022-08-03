import { Component } from "react"

class CardList extends Component {
    render(){
        console.log('render card list')
        const { monsters } = this.props;
        return (
            <div>
                {
                    monsters.map((monster)=>(
                        <div className="card-container" key={monster.id}>
                            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`} />
                            <h2>{monster.name}</h2>
                            <p>{monster.email}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default CardList;
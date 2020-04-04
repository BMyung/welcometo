import React from "react"

export class Card extends React.Component{
    render(){
        return (
        <div className='cardFront'>
            <div className = {'preview ' + this.props.card.ability}>
            {this.props.card.ability}
            </div>
            <h1 className='number'>{this.props.card.number}</h1>
        </div>

    )
}
}

import React from "react"

export class Cardback extends React.Component{
    render(){
        return (
        <div className='cardBack'>
            <h1 className='ability'>{this.props.card.ability}</h1>
        </div>

    )
}
}

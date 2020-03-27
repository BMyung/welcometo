import React from "react"
import {Card} from '../card/card'
import {Cardback} from '../card/cardback'


export class Combo extends React.Component{
    render(){
        let topCard = this.props.deck.stacks[0];
        let topDiscard = this.props.deck.discards[0];
        return (
        <div className='combo'>
        <Card card={topCard}/>
        <Cardback card={topDiscard}/>
        </div>

    )
}
}
import React from "react"
import {Card} from '../card/card'
import {Cardback} from '../card/cardback'


export class Combo extends React.Component{
    render(){
        let topCard = this.props.deck.topStacks;
        let topDiscard = this.props.deck.discardStacks;
        return (
        <div className='combo'>
        <Card card={topCard}/>
        <Cardback card={topDiscard}/>
        </div>

    )
}
}
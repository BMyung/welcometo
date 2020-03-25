import React from "react"
import {Card} from '../card/card'
import {Cardback} from '../card/cardback'


export class Combo extends React.Component{
    render(){
        return (
        <div className='combo'>
        <Card />
        <Cardback />
        </div>

    )
}
}
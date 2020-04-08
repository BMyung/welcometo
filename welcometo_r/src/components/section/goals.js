import React from "react"
import { Goalpoints } from './goalpoints'

export class Goal extends React.Component {
    render() {
        return (
            <div className='goalCard'>
                <h2> n' {this.props.goalCard.level}</h2>
                    <div className='goalDetail'>
                        <h1>{this.props.goalCard.goal}</h1>
                        <h3>{this.props.goalCard.description}</h3>
                    </div>
                        <Goalpoints points = {this.props.goalCard} bg = {this.props.status}/>
            </div>

        )
    }
}
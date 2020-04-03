import React from "react"

export class Goalpoints extends React.Component{
    render(){
        return (
        <div className='points'>
            <h2 className='goalPoint1'>First: {this.props.points.first_points}</h2>
            <h2 className='goalPoint2'>Rest: {this.props.points.second_points}</h2>
        </div>

    )
}
}
import React from "react"

export class Goalpoints extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color:'',
            active: true, 
      };
    }
    onChange = () => {
        const currentState = this.state.active;
        currentState ? this.setState({color: 'rgb(59,59,59)'}) : this.setState({color: ''});
        this.setState({ active: !currentState });
    }
    render(){
        return (
        <div className='points'>
            <h2 style={{backgroundColor: this.state.color}} className='goalPoint1' onClick={this.onChange}>First: {this.props.points.first_points}</h2>
            <h2 className='goalPoint2'>Rest: {this.props.points.second_points}</h2>
        </div>

    )
}
}
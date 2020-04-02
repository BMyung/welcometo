import React from "react"
import { Goalpoints } from './goalpoints'

export class Goal extends React.Component {
    render() {
        return (
            <div className='goalCard'>
                <h2> Level 1</h2>
                    <div className='goalDetail'>
                        <h2>[x] [x] [x] [x] [x] [x]</h2>
                        <h3>Six 1s</h3>
                        <Goalpoints />
                    </div>
            </div>

        )
    }
}
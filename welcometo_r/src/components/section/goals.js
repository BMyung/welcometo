import React from "react"
import { Goalpoints } from './goalpoints'

export class Goal extends React.Component {
    render() {
        return (
            <div className='goalCard'>
                <h2> Level 1</h2>
                    <div>
                        <h2>[x x x x x] (5) [x x x x x] (5)</h2>
                    </div>
                <Goalpoints />
            </div>

        )
    }
}
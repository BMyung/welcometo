import React from 'react'

export class Menu extends React.Component{
    render(){
        return (
            <div className = 'menu'>
                <button>Next Card</button>
                <button>Reshuffle</button>
                <div className='links'>
                Download apps here:
                <ul>
                    <li><a href='https://play.google.com/store/apps/details?id=com.bluecocker.welcome'>Google Play</a></li>
                    <li><a href='https://apps.apple.com/us/app/welcome-to-your-perfect-place/id1358077007'>Apple Store</a></li>
                </ul>
                </div>
            </div>
        )
    }
}

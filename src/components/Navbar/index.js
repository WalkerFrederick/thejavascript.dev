import React from 'react';
import './index.scss'

import Logo from '../Icons/logo'
import MailIcon from '../Icons/mail';

import RightSlide from './RightSlide'

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            leftActive: false,
            rightActive: false,
        }
    }

    handleLeftClick() {
        if (this.state.rightActive === true) {
            this.setState(
                {rightActive: !this.state.rightActive,}
            );
        }
        this.setState(
            {leftActive: !this.state.leftActive,}
        );
    }

    handleRightClick() {
        if (this.state.leftActive === true) {
            this.setState(
                {leftActive: !this.state.leftActive,}
            );
        }
        this.setState(
            {rightActive: !this.state.rightActive,}
        );
    }


    

    render() {
        return (
            <div className="navigation-container">

                <div className={`nav-left ${this.state.leftActive ? 'left-active' : 'left-hidden'}`}>
                
                </div>

                <nav>
                    <button className={this.state.leftActive ? 'button-active' : null} id='left-icon' onClick={this.handleLeftClick.bind(this)}>
                        <MailIcon/>
                    </button>
                    <a href='/#' title='logo' className='logo'>
                        <Logo/>                                
                    </a>
                    <button className={this.state.rightActive ? 'button-active' : null} id='right-icon' onClick={this.handleRightClick.bind(this)}>
                        <span/>
                        <span/>
                        <span/>
                    </button>
                </nav>

                <div className={`nav-right ${this.state.rightActive ? 'right-active' : 'right-hidden'}`}>
                    <RightSlide/>
                </div>

            </div>
        )
    }

}

export default Navbar;
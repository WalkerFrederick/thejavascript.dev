import React from 'react';
import './index.scss'

import ArrowIcon from '../../Icons/arrow'

class RightSlide extends React.Component {

    render() {
        return (
            <div className='RightSlide'>
                <ul className='main-navigation'>
                    <li>
                        <span>item 1</span>
                        <ArrowIcon/>
                    </li>
                    <li>
                        <span>item 2</span>
                        <ArrowIcon/>
                    </li>
                    <li>
                        <span>item 3</span>
                        <ArrowIcon/>
                    </li>
                </ul>
                <ul className='aside-navigation'>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </div>
        )
    }

}

export default RightSlide;
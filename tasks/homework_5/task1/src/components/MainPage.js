import React, {PureComponent} from 'react'
import Fruits from './Fruits'

class MainPage extends PureComponent {
    state = {
        fruits: ['banana', 'lemon', 'apple']
    };

    render() {
        const {fruits} = this.state;
        console.log('************Parent Component************');
        return (
            <div>
                <Fruits fruits={fruits}/>
            </div>
        );


    }
}

export default MainPage


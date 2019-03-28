import React, {PureComponent} from 'react'
import Fruits from './Fruits'
import ErrorBoundary from './ErrorBoundary'

class MainPage extends PureComponent {
    state = {
        fruits: ['banana', 'apple', 'lemon']
    };
    render() {
        const {fruits} = this.state;
        return (
            <div id='inner-content'>
                <ErrorBoundary>
                    <Fruits fruits={fruits}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default MainPage


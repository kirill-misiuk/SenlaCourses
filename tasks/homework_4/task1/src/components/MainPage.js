import React from 'react'
class MainPage extends React.Component {
    state = {
        count: 0
    };
    plusButtonClick = () => {
        this.setState(({count}) => ({count: count + 1}))
    };
    minusButtonClick = () => {
        this.setState(({count}) => ({count: count - 1}))
    };

    render() {
        const {count} = this.state;
        return (

            <div id="inner-content">
                <div>
                    <h1>Count:{count}</h1>
                </div>
                <div>
                    <button id="button" onClick={this.plusButtonClick}>+</button>
                    <button id="button" onClick={this.minusButtonClick}>-</button>
                </div>

            </div>

        );


    }
}


export default MainPage


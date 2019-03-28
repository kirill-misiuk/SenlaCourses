import React, {PureComponent} from 'react'

export class Fruits extends PureComponent {

    render() {
        console.log('this is list ');
        const {fruits} = this.props;
        return (
<div id= 'inner-content'>
            <ul>

                {fruits.map((item) => (
                    <li key={item.toString()}><h3>{item}</h3></li>
                ))}
            </ul>
</div>
        )
    }
}

export default Fruits

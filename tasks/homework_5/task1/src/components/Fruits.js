import React, {PureComponent} from 'react'

export class Fruits extends PureComponent {

    render() {
        console.log('this is list ');
        const {fruits} = this.props;
        return (

            <ul>

                {fruits.map((item) => (
                    <li key={item.id}><h3>{item}</h3></li>
                ))}
            </ul>

        )
    }
}

export default Fruits

import React, {PureComponent} from 'react'

export class Fruits extends PureComponent {
    render() {
        const {fruits} = this.props;
        if (fruits.length <= 0) {
            throw new Error();
        }
        return (
            <ul>
                {fruits.map((item) => (
                    <li key={item}><h3>{item}</h3></li>
                ))}
            </ul>
        )
    }
}

export default Fruits





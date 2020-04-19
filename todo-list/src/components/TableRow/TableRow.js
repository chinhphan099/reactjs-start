import React, {Component} from 'react';

class TableRow extends Component {
    onClick(elm) {
        elm.classList.add('123');
    }
    render() {
        const {item} = this.props;
        return (
            <tr onClick={(e) => this.onClick(e.currentTarget)}>
                <td>{item.company}</td>
                <td>{item.contact}</td>
                <td>{item.country}</td>
            </tr>
        );
    }
}

export default TableRow;
import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {
    render() {
        const {item} = this.props;
        const className = classNames({
            'TodoItem': true,
            'TodoItem-complete': item.isComplete
        });
        return (
            <div className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;
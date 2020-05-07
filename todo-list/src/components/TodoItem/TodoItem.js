import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends Component {
    render() {
        const {item, onClick} = this.props;
        return (
            <div onClick={onClick} className={classNames('TodoItem', {
                    'TodoItem-complete': item.isComplete}
                )}>
                <p>{item.title}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        isComplete: PropTypes.bool
    }),
    onClick: PropTypes.func
};

export default TodoItem;
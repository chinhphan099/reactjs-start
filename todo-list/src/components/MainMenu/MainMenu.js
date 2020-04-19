import React, {Component} from 'react';
import './MainMenu.css';
import classNames from 'classnames';

class MainMenu extends Component {
    render() {
        const {item} = this.props;
        const className = classNames({
            'menuitem': true,
            'active': item.isActive
        });
        return (
            <div className={className}>
                <i className={item.iconCls}></i>
                <span>{item.title}</span>
            </div>
        );
    }
}

export default MainMenu;
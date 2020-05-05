import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import MainMenu from './components/MainMenu/MainMenu';
import TableRow from './components/TableRow/TableRow';
import TrafficLight from './components/TrafficLight/TrafficLight';

const RED = 0,
    ORANGE = 1,
    GREEN = 2;
class App extends Component {
    constructor() {
        super();

        this.mainMenu = [
            { iconCls: 'icon-1', title: 'Home', isActive: true },
            { iconCls: 'icon-2', title: 'DEALS' },
            { iconCls: 'icon-3', title: 'UPLOAD' }
        ];

        this.table = {
            heading: ['Company', 'Contact', 'Country'],
            body: [
                { company: 'Company 1', contact: 'Contact 1', country: 'Country 1' },
                { company: 'Company 2', contact: 'Contact 2', country: 'Country 2' }
            ]
        };

        this.state = {
            currentColor: RED,
            todoItems: [
                { title: 'Học bài', isComplete: true },
                { title: 'Đi ngủ' }
            ]
        };

        setInterval(() => {
            this.setState({
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 2000);
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    onItemClick(item) {
        // this.state.todoItems[index].isComplete = !this.state.todoItems[index].isComplete;
        return () => {
            const isComplete = item.isComplete;
            const {todoItems} = this.state;
            const index = this.state.todoItems.indexOf(item);
            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index + 1)
                ]
            });
        };
    }

    render() {
        const { currentColor } = this.state;
        return (
            <div className = "App">
                <TrafficLight currentColor={currentColor}/>
                {
                    this.mainMenu.map((item, index) =>
                        <MainMenu key = { index } item = { item } />
                    )
                }
                {
                    this.state.todoItems.length > 0 && this.state.todoItems.map((item, index) =>
                        <TodoItem key={index} item={item} onClick={this.onItemClick(item)} />
                    )
                }
                { this.state.todoItems.length === 0 && 'Nothing here' }

                <table>
                    <thead>
                        <tr>
                            {
                                this.table.heading.map((item, index) =>
                                    <th key={index}> { item } </th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.table.body.map((item, index) =>
                                <
                                TableRow item = { item }
                                key = { index }
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;

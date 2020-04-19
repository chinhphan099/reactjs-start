import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem/TodoItem';
import MainMenu from './components/MainMenu/MainMenu';
import TableRow from './components/TableRow/TableRow';

class App extends Component {
    constructor() {
        super();
        this.todoItems = [
            {title: 'Học bài', isComplete: true},
            {title: 'Đi ngủ'}
        ];

        this.mainMenu = [
            {iconCls: 'icon-1', title: 'Home', isActive: true},
            {iconCls: 'icon-2', title: 'DEALS'},
            {iconCls: 'icon-3', title: 'UPLOAD'}
        ];

        this.table = {
            heading: ['Company', 'Contact', 'Country'],
            body: [
                {company: 'Company 1', contact: 'Contact 1', country: 'Country 1'},
                {company: 'Company 2', contact: 'Contact 2', country: 'Country 2'}
            ]
        };
    }

    render() {
        return (
            <div className="App">
                {
                    this.mainMenu.map((item, index) => 
                        <MainMenu key={index} item={item} />
                    )
                }
                {
                    this.todoItems.map((item, index) => 
                        <TodoItem key={index} item={item} />
                    )
                }
                <table>
                    <thead>
                        <tr>
                            {
                                this.table.heading.map((item, index) => 
                                    <th key={index}>{item}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.table.body.map((item, index) =>
                                <TableRow item={item} key={index} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;

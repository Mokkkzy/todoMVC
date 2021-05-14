import React, { Component } from "react";
import ListItem from './ListItem'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[{
                name:'test',status:0
            }]
        }
    }

    completeTask1(name) {
        const TodoList =[]
        this.state.list.forEach((element,index)=>{
            if(element.name === name ) {
                const item = this.state.list[index]
                TodoList.push(Object.assign({},item,{status: item.status === 0 ? 1 : 0}))
                this.setState({
                    list:TodoList
                })
            } else {
                TodoList.push(element)
            }
        })
    }

    deleteItem1(name) {
        const data = this.state.list.filter(element => element.name !== name)
        this.setState({
            list: data
        })
    }

    render(){
        return (
            <div className="Todolist">
                <header className="header">TodoList</header>
                <ListItem data={this.state.list} 
                    deleteItem={this.deleteItem1.bind(this)}
                    completeTask={this.completeTask1.bind(this)} />
                <footer>
                    <input type="text" placeholder="addtodo"></input>
                    <button className="addTodo">Add</button>
                </footer>
            </div>
        );
    }
}


export default TodoList;
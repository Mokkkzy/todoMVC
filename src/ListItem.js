//eslint-disable-next-line
import React, { Component } from "react";

class ListItem extends React.Component{
    completeTask(name) {
        this.props.completeTask(name)
    }

    deleteTask(name) {
        this.props.deleteItem(name)
    }

    render() {
        return(
            <ul>
            {
                this.props.data.map(element =>{
                    return (
                        <li className="ListItem" key={element.name}>
                            <input type="checkbox" 
                                checked={element.status === 1}
                                onClick={this.completeTask.bind(this,element.name)}
                            />
                            <span style={{textDecorationLine: element.status?'line-through':'none'}}>{element.name}</span>
                            <button className="delete" onClick={this.deleteTask.bind(this,element.name)}>删除</button>
                        </li>
                    )
                })
            }
            </ul>
        )
    }
}

export default ListItem
import React, { Component } from "react";
import { useState } from "react";
import styles from '../styles/Home.module.css'
import TodoItem from "./todoItems";

class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            open: false,

        }
        this.handleChange = props.handleChange;
        this.submit = props.submit;
        this.send = this.send.bind(this);
    }

    send(){
        this.setState({open: false});
        this.submit();
    }
    

    render() {
        return(
            
            <div>
                <button className={styles.newTask} onClick={() => this.setState({open: !this.state.open})}>New Task</button>  
                {this.state.open == true ?
                    <div className={styles.newTaskContainer}>
                        <input type="text" className={styles.newTaskInput} placeholder="New task" onChange={(event) => this.handleChange(event)}/>
                        <button className={styles.newTaskButton} onClick={() => this.send()}>Add</button>
                    </div>
                    : null}
            </div>
        );
    }

};

export default NewItem;
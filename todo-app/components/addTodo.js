import React from "react";
import { useState } from "react";
import styles from '../styles/Home.module.css'
import TodoItem from "./todoItems";

const AddTodo = (props) => {

    return(
        <div>
            {props.todo.map((item) => (
                <div>
                    {props.done == false ?
                        <div>
                            <TodoItem cle={item.key} name={item.text} done={props.done} delete={props.delete} setDone={props.setDone}/>
                        </div>
                        :
                        <div>
                            <TodoItem cle={item.key} name={item.text} done={props.done} delete={props.delete}/>
                        </div>
                    }
                </div>
            ))}   
        </div>
    );

};

export default AddTodo;
import React from "react";
import styles from '../styles/Home.module.css'
import Delete from "./delete";

const TodoItem = (props) => {
    
    return (
        <div>
            {props.done == true ?
                <div className={styles.taskDone} >
                    {props.name}
                    <Delete delete={props.delete} cle={props.cle} done={props.done}/>
                </div>
                : 
                <div className={styles.taskContainer} onClick={() => props.setDone(props.cle)}>
                    {props.name}
                    <Delete delete={props.delete} cle={props.cle} done={props.done}/>
                </div>
            }
        </div>
    )
};

export default TodoItem;
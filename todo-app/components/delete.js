import { AiFillDelete } from "react-icons/ai";
import styles from '../styles/Home.module.css'
import React from 'react';

const Delete = (props) => {

  return (
    <span className={styles.delete} onClick={(e) => {props.delete(props.cle, props.done);e.stopPropagation();}}><AiFillDelete className={styles.img}/></span>
  )
}

export default Delete;
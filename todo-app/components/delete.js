import { AiFillDelete } from "react-icons/ai";
import styles from '../styles/Home.module.css'
import React from 'react';

const Delete = (props) => {

  return (
    <button className={styles.delete} onClick={() => props.delete(props.cle, props.done)}><AiFillDelete className={styles.img}/></button>
  )
}

export default Delete;
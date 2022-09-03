import Head from 'next/head'
import Image from 'next/image'
import AddTodo from '../components/addTodo.js'
import styles from '../styles/Home.module.css'
import NewItem from '../components/newItem.js'
import { Component } from 'react'

export default class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      aFaire: [
        {key: 1, text: "Faire les courses"},
        {key: 2, text: "Faire la vaisselle"},
      ],
      fait: [
        {key: 3, text: "Faire le repassage"},
        {key: 4, text: "Faire la cuisine"},
      ],
    }
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(event) {
    this.setState({newItem: event.target.value});
  }

  submit() {
    this.setState({aFaire: [...this.state.aFaire, {key: this.state.aFaire.length + 1, text: this.state.newItem}]});
  }

  setDone(key) {
    //Supprimer un élément du tableau aFaire
    let newAFaire = this.state.aFaire.filter((item) => item.key != key);
    //Ajouter l'élément supprimé dans le tableau fait
    let newFait = [...this.state.fait, this.state.aFaire.filter((item) => item.key == key)[0]];
    this.setState({aFaire: newAFaire, fait: newFait});
  }

  delete(cle, done){
    if(done){
      //Supprimer l'élément du tableau fait
      let newFait = this.state.fait.filter((item) => item.key != cle);
      this.setState({fait: newFait});

    } else{
      //Supprimer l'élément du tableau aFaire
      let newAFaire = this.state.aFaire.filter((item) => item.key != cle);
      this.setState({aFaire: newAFaire});

    }


  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Todo list</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={styles.header}>
          <h1 className={styles.title}>Todo App</h1>
          <NewItem handleChange={this.handleChange} submit={this.submit}/>
        </header>


        <main className={styles.main}>

          <div className={styles.listTask}>
            <h2 className={styles.containerTaskTitle}>To do</h2>
            <AddTodo todo={this.state.aFaire} setDone={this.setDone} done={false} delete={this.delete}/>
          </div>

          <div className={styles.listTask}>
            <h2 className={styles.containerTaskTitle}>Done</h2>
            <AddTodo todo={this.state.fait} done={true} delete={this.delete}/>
          </div>

        </main>
      </div>
    )
  }
}

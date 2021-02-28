import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
import Joke from "./components/Joke";
import products from "./products";
import Product from "./components/Product";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = { todos: todosData };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const novoVetor = prevState.todos.map((elem) => {
        if (elem.id === id) {
          elem.completed = !elem.completed;
        }
        console.log("elem", elem);
        return elem;
      });
      console.log("novovetor", novoVetor);
      return { todos: novoVetor };
    });
  }

  render() {
    const novosDados = this.state.todos.map((elem) => (
      <TodoItem key={elem.id} objeto={elem} handleChange={this.handleChange} />
    ));
    return <div>{novosDados}</div>;
  }
}

export default App;

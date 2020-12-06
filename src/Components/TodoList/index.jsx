import React from "react";
import { connect } from "react-redux";
import { addTodoAction, completeTodoAction } from "../../redux/actions";
import mainImg from "../../assets/mountain.jpg";
import AddTodoForm from "../AddTodo";
import "./styles.css";
import TodoMenu from "../TodoMenu";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, menuActive: false };
  }

  expand = () => {
    this.setState((state) => {
      return {
        active: !state.active,
      };
    });
  };

  expandMenu = () => {
    this.setState((state) => {
      return {
        menuActive: !state.menuActive,
      };
    });
  };

  render() {
    return (
      <main className="App-Todo">
        <div className="todo-head">
          <div className="aspect-ratio-box">
            <div className="media">
              <img src={mainImg} alt="img" />
            </div>
            <section className="content left-part">
              <p className="icon">
                <i onClick={this.expandMenu} className="fas fa-bars"></i>
              </p>
              <h1 className="title">
                Your
                <br />
                Things
              </h1>
              <div className="current-date">
                <p>Sep 5,2015</p>
              </div>
            </section>
            <aside className="content right-part">
              <div className="tasks-count">
                <div className="tasks personal">
                  <span className="personal-task-count count">23</span>
                  <p>Personal</p>
                </div>
                <div className="tasks business">
                  <span className="business-task-count count">50</span>
                  <p>Business</p>
                </div>
              </div>
              <div className="percentage">
                <p className="percentage-done">65% done</p>
              </div>
            </aside>
          </div>
        </div>
        <div className="todo-body">
          <p className="inbox">INBOX</p>
          <ul className="tasks-list">
            <li>
              <div className="container">
                <p className="task-icon">
                  <img src="https://img.icons8.com/nolan/50/task-planning.png" />
                </p>
                <div className="task-main-info">
                  <h3 className="task-name">Record Song</h3>
                  <p className="task-location">Studio on Elmer</p>
                </div>
              </div>
              <div className="time">9pm</div>
            </li>
          </ul>
          <p className="completed">completed 5</p>
        </div>

        <div onClick={this.expand} className="add-new-task icon-container">
          <i className="fas fa-plus"></i>
        </div>
        <TodoMenu isActive={this.state.menuActive} expand={this.expandMenu}></TodoMenu>
        <AddTodoForm isActive={this.state.active} expand={this.expand}></AddTodoForm>
      </main>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => dispatch(addTodoAction(content)),
    completeTodo: (id) => dispatch(completeTodoAction(id)),
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(TodoList);

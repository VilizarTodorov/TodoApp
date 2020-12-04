import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addTodoAction, completeTodoAction } from "../../redux/actions";
import mainImg from "../../assets/mountain.jpg";
import "./styles.css";

const INITIAL_STATE = {
  category: "",
  title: "",
  time: "",
  place: "",
  note: "",
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  addTodoToList = (e) => {
    e.preventDefault();
    const { title } = this.state;
    this.props.addTodo({ text: title });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // const { title } = this.state;
    // const todos = this.props.todos.map((x, index) => <div key={index}>{x.text}</div>);

    return (
      <main className="App-Todo">
        <div className="todo-head">
          <div className="aspect-ratio-box">
            <div className="media">
              <img src={mainImg} alt="img" />
            </div>
            <section className="content left-part">
              <p className="icon">
                <i className="fas fa-bars"></i>
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
                <p className="task-icon">icon</p>
                <div className='task-main-info'>
                <h3 className='task-name'>task for today</h3>
                <p className='task-location'>task location</p>
                </div>
              </div>
              <div className="time">9pm</div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <p className="completed">completed 5</p>
        </div>
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

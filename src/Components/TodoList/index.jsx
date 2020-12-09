import React from "react";
import { connect } from "react-redux";
import mainImg from "../../assets/mountain.jpg";
import AddTodoForm from "../AddTodo";
import "./styles.css";
import TodoMenu from "../TodoMenu";
import TodoEntry from "../TodoEntry";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, menuActive: false, categoryToFilter: "all" };
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

  onChange = (event) => {
    this.setState({ categoryToFilter: event.target.value });
  };

  filterOutTasks = (categoryToFilter) => {
    switch (categoryToFilter) {
      case "all":
        return this.props.todos;
      case "personal":
        return this.props.todos.filter((x) => x.category === "personal");

      case "business":
        return this.props.todos.filter((x) => x.category === "business");

      case "completed":
        return this.props.todos.filter((x) => x.completed === true);

      case "uncompleted":
        return this.props.todos.filter((x) => x.completed === false);

      default:
        break;
    }
  };

  render() {
    const personalCount = this.props.todos.filter((x) => x.category === "personal").length;
    const businessCount = this.props.todos.length - personalCount;
    const tasksLeft = this.props.todos.filter((x) => x.completed === false).length;
    const completedCount = this.props.todos.length - tasksLeft;
    const { categoryToFilter } = this.state;

    const filteredTasks = this.filterOutTasks(categoryToFilter);
    const taskList = filteredTasks.map((x, index) => (
      <TodoEntry
        key={index}
        todoId={x.id}
        completed={x.completed}
        category={x.category}
        taskName={x.title}
        location={x.place}
        time={x.time}
      ></TodoEntry>
    ));

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
                <p>Today Date</p>
              </div>
            </section>
            <aside className="content right-part">
              <div className="tasks-count">
                <div className="tasks personal">
                  <span className="personal-task-count count">{personalCount}</span>
                  <p>Personal</p>
                </div>
                <div className="tasks business">
                  <span className="business-task-count count">{businessCount}</span>
                  <p>Business</p>
                </div>
              </div>
              <div className="percentage">
                <p className="percentage-done">Tasks left {tasksLeft}</p>
              </div>
            </aside>
          </div>
        </div>
        <div className="todo-body">
          <div className="filter-container">
            <p className="inbox">INBOX</p>
            <select
              className="filter-category"
              name="filter-category"
              id="filter-category"
              value={categoryToFilter}
              onChange={this.onChange}
            >
              <option value="all">All</option>
              <option value="business">Business</option>
              <option value="personal">Personal</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
          <ul className="tasks-list">{taskList}</ul>
          <p className="completed">completed {completedCount}</p>
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

export default connect(mapStateToPros, null)(TodoList);

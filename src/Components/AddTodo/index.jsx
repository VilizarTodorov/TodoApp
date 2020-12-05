import React from "react";
import { TODO_LIST_SVG, X_SVG } from "../../utils";
import "./styles.css";

const INITIAL_STATE = {
  category: "Select Category",
  title: "",
  time: "",
  place: "",
  note: "",
};

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  selectCategory = (event) => {
    this.setState({ category: event.target.value });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { category, title, time, place, note } = this.state;

    return (
      <div className={`App-add-task ${this.props.isActive ? "active" : ""}`}>
        <div className="add-task-header-part">
          <div onClick={this.props.expand}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <p>Add new thing</p>
          <div>
            <i className="fas fa-sliders-h"></i>
          </div>
        </div>

        <div className="add-task-svg list-svg">
          <TODO_LIST_SVG></TODO_LIST_SVG>
        </div>

        <form className="add-form" onSubmit={this.onSubmit}>
          <select
            className="form-item"
            name="task-category"
            id="task-category"
            value={category}
            onChange={this.selectCategory}
          >
            <option className="form-item" value="select-category">
              Select Category
            </option>
            <option className="form-item" value="business">
              Business
            </option>
            <option className="form-item" value="personal">
              Personal
            </option>
          </select>
          <input
            className="form-item"
            id="title"
            name="title"
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={this.onChange}
          />
          <input
            className="form-item"
            id="place"
            name="place"
            type="text"
            placeholder="Place"
            value={place}
            onChange={this.onChange}
          />
          <input
            className="form-item"
            id="time"
            name="time"
            type="text"
            placeholder="Time"
            value={time}
            onChange={this.onChange}
          />
          <input
            className="form-item"
            id="note"
            name="note"
            type="text"
            placeholder="Note"
            value={note}
            onChange={this.onChange}
          />
          <button className="submit-button">ADD YOUR THING</button>
        </form>

        <div onClick={this.props.expand} className="add-task-svg">
          <X_SVG></X_SVG>
        </div>
      </div>
    );
  }
}

export default AddTodoForm;

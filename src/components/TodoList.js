import React, { Component } from "react";
import { MDBBtn, MDBCard, MDBListGroup, MDBListGroupItem } from "mdbreact";
import styles from "../css-modules/TodoList.module.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      taskList: []
    };
  }

  changeUserInput(input) {
    this.setState({
      userInput: input
    });
  }

  addTask(input) {
    if (input !== "") {
      let list = [...this.state.taskList];
      list.push({ input: input, key: list.length + 1 })
      this.setState({
        userInput: "",
        taskList: list
      })
    }
  }

  removeTask() {
    let list = [...this.state.taskList];
    list.pop();
    this.setState({
      taskList: list
    });
  }

  clearList() {
    this.setState({
      taskList: []
    });
  }

  render() {
    let placeholder =
      "task number " + (this.state.taskList.length + 1) + ": ...";

    return (
      <div>
        <MDBCard className={styles.card}>
          <div className={styles.form}>
            <label className="sr-only" htmlFor="userInput">
              Task
            </label>
            <input
              id="userInput"
              className={styles.user_input}
              type="text"
              onChange={e => this.changeUserInput(e.target.value)}
              value={this.state.userInput}
              placeholder={placeholder}
            />
            <MDBBtn
              className={styles.btn}
              color="blue-grey"
              onClick={() => this.addTask(this.state.userInput)}
            >
              add
            </MDBBtn>
          </div>

          {this.state.taskList.length === 0 ? (
            <div className={styles.no_tasks}>
              no tasks for today! <i className="fas fa-smile" />{" "}
            </div>
          ) : null}

          <MDBListGroup className={styles.task_list}>
            {this.state.taskList.map(task => (
              <MDBListGroupItem key={task.key} className={styles.task}>
                <em className={styles.number}>task number {task.key}:</em>
                {task.input}
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        </MDBCard>

        <div className={styles.btn_group}>
          <MDBBtn
            outline
            onClick={() => this.removeTask(this.state.userInput)}
            className={styles.btn}
          >
            remove
          </MDBBtn>
          <MDBBtn
            onClick={() => this.clearList(this.state.userInput)}
            className={styles.btn}
          >
            clear
          </MDBBtn>
        </div>
      </div>
    );
  }
}

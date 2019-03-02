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
      list.push({ input: input, key: list.length });
      this.setState({
        userInput: "",
        taskList: list
      });
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
              placeholder="anything to do?"
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
            <div className={styles.no_tasks}>no tasks for today! <i className="fas fa-smile"></i> </div>
          ) : null}

          <MDBListGroup className={styles.task_list}>
            {this.state.taskList.map(task => (
              <MDBListGroupItem key={task.key} className={styles.task}>
                <em className={styles.number}>task no. {task.key + 1}:</em>
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

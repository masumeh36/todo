import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
@observer
class ClearCompleted extends Component {
  constructor(props) {
      super(props)
    this.clear = this.clear.bind(this);
  }
  clear() {
    todoStore.Clear();
      }
  render() {
    if (todoStore.todosA.filter(todo => todo.completed === true).length>0) {
      return (
        <a onClick={this.clear} className="clear-completed">
          clear-completed
        </a>
      );
    } else {
      return null;
    }
  }
}
export default ClearCompleted
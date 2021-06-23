import { Task, Board } from './model';
import { renderBoard, renderActions } from './render';

const defaultTasks = [
  new Task('Read the code'),
  new Task('Fix the bug'),
  new Task('Join Pecan')
];

export class App {
  constructor(root) {
    this.root = root;
  }

  init() {
    this.reset();
  }

  reset() {
    this.board = new Board([...defaultTasks]);
    this.render();
  }

  setTaskIsDone(task, isDone) {
    task.isDone = isDone;
    this.render();
  }

  addTask(title) {
    this.board.tasks.push(new Task(title));
    this.render();
  }

  render() {
    const boardElement = renderBoard({
      board: this.board,
      onTaskIsDoneChange: (task, isDone) => this.setTaskIsDone(task, isDone)
    });

    const actionsElement = renderActions({
      onAddTask: title => this.addTask(title),
      onResetBoard: () => this.reset()
    });

    this.root.innerHTML = '';
    this.root.appendChild(boardElement);
    this.root.appendChild(actionsElement);
  }
}

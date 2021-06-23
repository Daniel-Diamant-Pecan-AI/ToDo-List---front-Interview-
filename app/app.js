import { Task, Board } from './model';
import { renderBoard } from './render';

const defaultTasks = [
  new Task('Read the code'),
  new Task('Solve the problem'),
  new Task('Join Pecan')
];

export class App {
  controls = {
    toggleTask: task => this.toggleTask(task),
    addTask: title => this.addTask(title)
  };

  constructor() {
    this.board = new Board([...defaultTasks]);
  }

  init(root) {
    this.root = root;
    this.render();
  }

  toggleTask(task) {
    task.isDone = !task.isDone;
    this.render();
  }

  addTask(title) {
    this.tasks.push(new Task(title));
    this.render();
  }

  render() {
    this.root.innerHTML = '';
    const board = renderBoard({
      board: this.board,
      onToggleTaskDone: this.controls.toggleTask
    });
    this.root.appendChild(board);
  }
}

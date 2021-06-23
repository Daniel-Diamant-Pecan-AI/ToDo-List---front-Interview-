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

  toggleTask(task) {
    task.isDone = !task.isDone;
    this.render();
  }

  addTask(title) {
    this.board.tasks.push(new Task(title));
    this.render();
  }

  render() {
    const board = this.board;
    const onToggleTaskDone = task => this.toggleTask(task);
    const onAddTask = title => this.addTask(title);
    const onResetBoard = () => this.reset();

    this.root.innerHTML = '';
    this.root.appendChild(renderBoard({ board, onToggleTaskDone }));
    this.root.appendChild(renderActions({ onAddTask, onResetBoard }));
  }
}

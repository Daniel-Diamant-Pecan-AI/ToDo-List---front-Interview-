import { Task, Board } from './model';
import { renderBoard, renderAddTask } from './render';

const defaultTasks = [
  new Task('Read the code'),
  new Task('Solve the problem'),
  new Task('Join Pecan')
];

export class App {
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
    this.board.tasks.push(new Task(title));
    this.render();
  }

  render() {
    this.root.innerHTML = '';

    this.root.appendChild(
      renderBoard({
        board: this.board,
        onToggleTaskDone: task => this.toggleTask(task)
      })
    );

    this.root.appendChild(
      renderAddTask({
        onAddTask: title => this.addTask(title)
      })
    );
  }
}

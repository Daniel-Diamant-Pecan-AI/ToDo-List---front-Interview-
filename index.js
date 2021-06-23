const appDiv = document.getElementById('app');

function ToDoItem(title) {
  this.title = title;
  this.isDone = false;
}

function Board(initTasks) {
  this.tasks = [...initTasks];
}

const defaultTasks = [
  new ToDoItem('Read the code'),
  new ToDoItem('Solve the problem')
];

const getTaskHtml = task => `
  <li>
    ${task.title} -
    ${task.isDone ? 'done' : 'pending'}
  </li>
`;

const getBoardHtml = board => `
  <ul>
    ${board.tasks.map(getTaskHtml).join('')}
  </ul>
`;

class App {
  constructor() {
    this.board = [...defaultTasks];
    this.render();
  }
  render() {
    appDiv.innerHTML = getBoardHtml(this.board);
  }
}

const app = new App();

export function Task(title) {
  this.title = title;
  this.isDone = false;
}

export function Board(initTasks) {
  this.tasks = initTasks;
}

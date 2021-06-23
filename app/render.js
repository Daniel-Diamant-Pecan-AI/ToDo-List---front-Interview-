export function renderBoard({ board, onTaskIsDoneChange, onTaskMove }) {
  const listElement = document.createElement('div');
  listElement.className = 'board';
  board.tasks.forEach(task => {
    const onIsDoneChange = value => onTaskIsDoneChange(task, value);
    const onMove = offset => onTaskMove(task, offset);
    const taskElement = renderTask({ task, onIsDoneChange, onMove });
    listElement.appendChild(taskElement);
  });
  return listElement;
}

export function renderTask({ task, onIsDoneChange, onMove }) {
  const boxElement = document.createElement('input');
  boxElement.type = 'checkbox';
  boxElement.checked = task.isDone;
  boxElement.addEventListener('change', e => onIsDoneChange(e.target.checked));

  const titleElement = document.createElement('span');
  titleElement.innerHTML = task.title;

  const moveUpElement = document.createElement('button');
  moveUpElement.innerHTML = '⬆';
  moveUpElement.addEventListener('click', () => onMove(-1));

  const moveDownElement = document.createElement('button');
  moveDownElement.innerHTML = '⬇';
  moveDownElement.addEventListener('click', () => onMove(1));

  const labelElement = document.createElement('label');
  labelElement.appendChild(boxElement);
  labelElement.appendChild(titleElement);

  const taskElement = document.createElement('div');
  taskElement.className = 'task ' + (task.isDone ? 'done' : '');
  taskElement.appendChild(labelElement);
  taskElement.appendChild(moveUpElement);
  taskElement.appendChild(moveDownElement);
  return taskElement;
}

export function renderActions({ onAddTask, onResetBoard }) {
  const addTaskElement = document.createElement('button');
  addTaskElement.innerHTML = 'Add Task';
  addTaskElement.addEventListener('click', () => {
    const title = prompt('New task title');
    if (title) {
      onAddTask(title);
    }
  });

  const resetBoardElement = document.createElement('button');
  resetBoardElement.innerHTML = 'Reset';
  resetBoardElement.addEventListener('click', () => onResetBoard());

  const actionsElement = document.createElement('div');
  actionsElement.append(addTaskElement);
  actionsElement.append(resetBoardElement);
  return actionsElement;
}

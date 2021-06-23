export function renderBoard({ board, onTaskIsDoneChange }) {
  const listElement = document.createElement('div');
  listElement.className = 'board';
  board.tasks.forEach(task => {
    const onIsDoneChange = value => onTaskIsDoneChange(task, value);
    const taskElement = renderTask({ task, onIsDoneChange });
    listElement.appendChild(taskElement);
  });
  return listElement;
}

export function renderTask({ task, onIsDoneChange }) {
  const boxElement = document.createElement('input');
  boxElement.type = 'checkbox';
  boxElement.checked = task.isDone;
  boxElement.addEventListener('change', e => onIsDoneChange(e.target.checked));

  const titleElement = document.createElement('span');
  titleElement.innerHTML = task.title;

  const labelElement = document.createElement('label');
  labelElement.className = 'task ' + (task.isDone ? 'done' : '');
  labelElement.appendChild(boxElement);
  labelElement.appendChild(titleElement);
  return labelElement;
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

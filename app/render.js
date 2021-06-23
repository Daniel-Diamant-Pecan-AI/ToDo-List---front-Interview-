export function renderBoard({ board, onToggleTaskDone }) {
  const listElement = document.createElement('div');
  listElement.className = 'board';
  board.tasks.forEach(task => {
    const onToggleDone = () => onToggleTaskDone(task);
    const taskElement = renderTask({ task, onToggleDone });
    listElement.appendChild(taskElement);
  });
  return listElement;
}

export function renderTask({ task, onToggleDone }) {
  const boxElement = document.createElement('input');
  boxElement.type = 'checkbox';
  boxElement.checked = task.isDone;
  boxElement.addEventListener('change', () => onToggleDone());

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

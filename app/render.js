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

export function renderAddTask({ onAddTask }) {
  const buttonElement = document.createElement('button');
  buttonElement.innerHTML = 'Add Task';
  buttonElement.addEventListener('click', () => {
    const title = prompt('New task title');
    onAddTask(title);
  });
  return buttonElement;
}

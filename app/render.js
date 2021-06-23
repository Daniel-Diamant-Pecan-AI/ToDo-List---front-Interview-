export function renderBoard({ board, onToggleTaskDone }) {
  const listElement = document.createElement('div');
  listElement.className = 'board';
  board.tasks.forEach(task => {
    const onToggleDone = () => onToggleDone(onToggleTaskDone);
    const taskElement = renderTask({ task, onToggleDone });
    listElement.appendChild(taskElement);
  });
  return listElement;
}

export function renderTask({ task, onToggleDone }) {
  const boxElement = document.createElement('input');
  boxElement.type = 'checkbox';
  boxElement.checked = task.isDone;

  const titleElement = document.createElement('span');
  titleElement.innerHTML = task.title;

  const labelElement = document.createElement('label');
  labelElement.className = 'board';
  labelElement.appendChild(boxElement);
  labelElement.appendChild(titleElement);
  return labelElement;
}

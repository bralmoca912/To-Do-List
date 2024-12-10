// Selecciona todas las entradas por su id
const inputs = document.querySelectorAll('input[type="text"]');

// Al cargar la página, recupera los valores de cada entrada
window.onload = function () {
  inputs.forEach(input => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });
};

// Guarda el valor de cada entrada en localStorage cuando se cambia
inputs.forEach(input => {
  input.addEventListener('input', function () {
    localStorage.setItem(input.id, input.value);
  });
});

const currentDate = new Date();
console.log(currentDate);  // Muestra la fecha y hora actual completa




// // Obtén la referencia del input
// const textInput = document.getElementById('textInput');
//
// // Cargar el valor guardado en localStorage al cargar la página
// window.onload = function() {
//     const savedText = localStorage.getItem('inputText');
//     if (savedText) {
//         textInput.value = savedText;
//     }
// }
//
// // Guardar el texto en localStorage cada vez que se cambia
// textInput.addEventListener('input', function() {
//     localStorage.setItem('inputText', textInput.value);
// });



// script.js
//
// document.getElementById('add-task').addEventListener('click', addTask);
// document.getElementById('new-task').addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     addTask();
//   }
// });
//
// function addTask() {
//   const taskInput = document.getElementById('new-task');
//   const taskText = taskInput.value.trim();
//
//   if (taskText !== '') {
//     const li = document.createElement('li');
//     li.textContent = taskText;
//
//     const deleteBtn = document.createElement('span');
//     deleteBtn.textContent = 'Eliminar';
//     deleteBtn.classList.add('delete');
//     deleteBtn.addEventListener('click', function () {
//       li.remove();
//     });
//
//     li.appendChild(deleteBtn);
//     document.getElementById('task-list').appendChild(li);
//     taskInput.value = '';
//   }
// }

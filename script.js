//Variable with todo list items.
var todos = ['item 1', 'item 2', 'item 3'];

//It should have a function to display todo list.
function displayTodos() {
console.log('My Todos:', todos);
};

displayTodos();

//It should have a function to change todos.
function addTodo(todo) {
    todos.push(todo);
    displayTodos();   
    
};

//It should have a function to change a todo item to a new value
function changeTodo(position, newValue) { 
    todos[position] = newValue;
    displayTodos();   
};

//It should have a function to delete a todo from a stated position
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();   

};


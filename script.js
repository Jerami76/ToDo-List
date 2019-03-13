/* This script is a todo list app created during completion of Practical JS */
// for loop (initialize; condition; final-expression)

// v9 There should be an li element for every todo[Done]
// Each li element should contain .todoText[Done]
// Each li element should show .completed[Done]
// Moved diplay from console to DOM[Done]

var todoList = {
    todos:[],

    addTodo: function(todoText) { 
    this.todos.push({
        todoText: todoText,
        completed: false
    });  
    },

    //Modified changeTodo to work on todos object -> todoText property.
    changeTodo: function(position, todoText) {
       // Old code-> this.todos[position] = newValue;
       this.todos[position].todoText = todoText;
    },

    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed; 
        //Bang(!)operator to give opposite Boolean value. Remember to grab todo. before trying to change value(completed).
    },

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        //get number of completed todos.
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        //Case 1: if everything's true make everything false.
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else { //Case 2: otherwise make everything true.
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }

};

//Handlers for onclick events
var handlers = {
    
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {        
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo((changeTodoPositionInput.value - 1), changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();

        //The code/course that I'm following mentions that you need to use .valueAsNumber here. Not sure why since input type = "number". Must ask. Works without? Debug is accurate and predictable.
        //Not sure if this course will get there but, I think I'd like to force completed=false on changeTodo.
    },
    deleteTodo: function() {
        var deleteTodoPostion = document.getElementById('deleteTodoPositionInput')
        todoList.deleteTodo((deleteTodoPostion.value - 1)); // -1 to match user expected functionality.
        deleteTodoPostion.value = '';
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPosition = document.getElementById('toggleCompletedPositionInput')
        todoList.toggleCompleted((toggleCompletedPosition.value - 1));
        toggleCompletedPosition.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }     
};

//displayTodos functionality has been changed to automatically display in HTML, and moved to view
//It clears the ul then, for each todos, create an li element then add(append) it to the ul.
var view = { 
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''; //Use innerHTML to grab contents of todosUl
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '(_) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion
            todosUl.appendChild(todoLi);
        }
    }
};

// Sample code
// var todoLi = document.createElement('li');
// var todosUl = document.querySelector('ul');
// todosUl.appendChild(todoLi);
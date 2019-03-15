/* This script is a todo list app created during completion of Practical JS */
// 
// v11
// todoList.toggleAll should use forEach
// view.displayTodos should use forEach

var todoList = {
    todos:[],

    addTodo: function(todoText) { 
    this.todos.push({
        todoText: todoText,
        completed: false
    });  
    },

    changeTodo: function(position, todoText) {
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

        // get number of completed todos.
        // for (var i = 0; i < totalTodos; i++) {
        //     if (this.todos[i].completed === true) {
        //         completedTodos++;
        //     }
        // }
        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        this.todos.forEach(function(todo) {
            //Case 1: If all are true, make all false.
            if (completedTodos === totalTodos) {
                todo.completed = false;
            //Case 3: Otherwise make all false.
            } else {
                todo.completed = true;
            }
        });

        // [Old code refactored to forEach]if (completedTodos === totalTodos) {
        //     this.todos.forEach(function(todo) {
        //         todo.completed = false;
        //     });
        // } else {
        //     this.todos.forEach(function(todo) {
        //         todo.completed = true;
        //     });
        // }      
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
        todoList.changeTodo((changeTodoPositionInput.valueAsNumber - 1), changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();

        //The code/course that I'm following mentions that you need to use .valueAsNumber here. Not sure why since input type = "number". Must ask. Works without? Debug is accurate and predictable.
        //Not sure if this course will get there but, I think I'd like to force completed=false on changeTodo.
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position); 
        
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPosition = document.getElementById('toggleCompletedPositionInput')
        todoList.toggleCompleted((toggleCompletedPosition.valueAsNumber - 1));
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

            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);

        }
    },

    createDeleteButton: function () {
        deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton'
        return deleteButton;
    },

    setUpEventListeners: function () {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function (event) {
            //Get the element clicked on.
            var elementClicked = event.target;

            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });

    }
};

view.setUpEventListeners();
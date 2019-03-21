
// This script is a todo list app created during completion of Practical JS //
// 
// v11
// todoList.toggleAll should use forEach[Done]
// view.displayTodos should use forEach[Done]

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
    },

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

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
    changeTodo: function () {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo((changeTodoPositionInput.valueAsNumber - 1), changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();

        //I'd like to force completed=false on changeTodo.
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);

        view.displayTodos();
    },
    toggleCompleted: function (position) {
        todoList.toggleCompleted(position);
    
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    }     
};

//It clears the ol then, for each todos, create an li element then add(append) it to the ol.
var view = {
    displayTodos: function () {
        var todosOl = document.querySelector('ol');
        todosOl.innerHTML = ''; //Use innerHTML to grab contents of todosOl

        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '(_) ' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createToggleCompletedButton());
            todoLi.appendChild(this.createDeleteButton());
            todosOl.appendChild(todoLi);
            
        }, this); 
    },
    
    createDeleteButton: function () {
        deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton'
        return deleteButton;
    },
//create a button to toggle completed.
    createToggleCompletedButton: function() {
        toggleCompletedButton = document.createElement('button');
        toggleCompletedButton.textContent = 'Complete';
        toggleCompletedButton.className = 'toggleCompletedButton'
        return toggleCompletedButton;
    },

    setUpEventListeners: function () {
        var todosOl = document.querySelector('ol');

        todosOl.addEventListener('click', function (event) {
            //Get the element clicked on.
            var elementClicked = event.target;
            //Check if elementClicked is a deleteButton. If so, run deleteTodo.
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
            if (elementClicked.className === 'toggleCompletedButton') {
                handlers.toggleCompleted(parseInt(elementClicked.parentNode.id))
            }
        });

    }
};

view.setUpEventListeners();
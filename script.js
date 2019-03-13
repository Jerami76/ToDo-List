/* This script is a todo list app created during completion of Practical JS */
// for loop (initialize; condition; final-expression)

// v9 There should be an li element for every todo[Done]
// Each li element should contain .todoText[Done]
// Each li element should show .completed
var todoList = {
    todos:[],

    //Method created from displayTodos stand-alone function.    
    displayTodos: function() {             
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!')          
        } else {
          console.log('My Todos:');
          for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                console.log('(x)', this.todos[i].todoText);
            } else {
                console.log('(_)', this.todos[i].todoText);
                }
            } 
        }
    },

    //Method created from addTodo stand-alone function.
    addTodo: function(todoText) { 
    this.todos.push({
        todoText: todoText,
        completed: false
    });

    this.displayTodos();   
    },

    //It should have a method to change a changeTodo item to a new value
    //created from changeTodo stand-alone function.
    //Modified changeTodo to work on todos object -> todoText property.
    changeTodo: function(position, todoText) {
       // Old code-> this.todos[position] = newValue;
       this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    //It should have a method to delete a todo item to a new value
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    //It should have a todoList.toggleCompleted method to modify completed property. **I'm going to try modeling it after changeTodo method.
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed; 
        //Bang(!)operator to give opposite Boolean value. Remember to grab todo. before trying to change value(completed).
        this.displayTodos();
    },

    //.toggleAll: If everything's true, make everything false. Otherwise, make everything true.

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
        this.displayTodos();
    }

};

//Handlers for onclick events
var handlers = {
    
    displayTodos: function() {
        todoList.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo: function() {        
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo((changeTodoPositionInput.value - 1), changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';

        //The code/course that I'm following mentions that you need to use .valueAsNumber here. Not sure why since input type = "number". Must ask. Works without? Debug is accurate and predictable.
        //Not sure if this course will get there but, I think I'd like to force completed=false.
    },
    deleteTodo: function() {
        var deleteTodoPostion = document.getElementById('deleteTodoPositionInput')
        todoList.deleteTodo((deleteTodoPostion.value - 1)); // -1 to match user expected functionality.
        deleteTodoPostion.value = '';
    },
    toggleCompleted: function() {
        var toggleCompletedPosition = document.getElementById('toggleCompletedPositionInput')
        todoList.toggleCompleted((toggleCompletedPosition.value - 1));
        toggleCompletedPosition.value = '';
    },
    toggleAll: function() {
        todoList.toggleAll();
    } //last method doesn't take a ','
        
};

//This object(view) is only for displaying(rendering). 
//It clears the ul then, for each todos, create an li element then add(append) it to the ul.
var view = { 
    displayTodos: function () {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = ''; //Use innerHTML to grab contents of todosUl
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            todoLi.textContent = todoList.todos[i].todoText;//.textContent(not value) to set li text= .todoText
            todosUl.appendChild(todoLi);
        }
    }
};

// Sample code
// var todoLi = document.createElement('li');
// var todosUl = document.querySelector('ul');
// todosUl.appendChild(todoLi);
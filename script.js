/* This script is a todo list app created during completion of Practical JS */
// for loop (initialize; condition; final-expression)

// v7(HTML Integration) Requirements-
// There should be a "Display todos" button and a "Toggle all" button in the app.
// Clicking "Display todos" should run todoList.displayTodos.
// Clicking "Toggle all" should run todoList.toggleAll.

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






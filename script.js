/* This script is a todo list app created during completion of Practical JS */
// for loop (initialize; condition; final-expression)

// v8 It should have working controls for .addTodo
// It should have working controls for .changeTodo
// It should have working controls for .deleteTodo
// It should have working controls for .toggleCompleted

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

// 1. We want to get access to the display todos button.
//var displayTodosButton = document.getElementById('displayTodosButton'); 
//var toggleAllButton =document.getElementById('toggleAllButton');
// 2. Run the displayTodos method when display todos button is clicked.
// grab variable, add listener(event, function() {action});
/*displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});
toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
}); */
// Refactored above variables, listeners into handlers object making element #'s redundant.
// We will be using format below, linking buttons into handlers object to keep code DRY and readable. 
// Above comments will be removed in future update.

var handlers = {
    
    displayTodos: function() {
        todoList.displayTodos();
    },

    toggleAll: function() {
        todoList.toggleAll();
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
        changeTodoTextInput = '';

        //The code/course that I'm following mentions that you need to use .valueAsNumber here. Not sure why since input type = "number". Must ask. Works without? Debug is accurate and predictable.
        //Not sure if this course will get there but, I think I'd like to force completed=false.
    },
    deleteTodo: function() {
        var deleteTodoPostion = document.getElementById('deleteTodoPosition')
        todoList.deleteTodo((deleteTodoPostion.value -1));
    },
};
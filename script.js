//changed to array of objects-todo list items.

//for loop (initialize condition final-expression)

 var todoList = {
    todos:[],
    //Method created from displayTodos stand-alone function.
    //v5 .displayTodos should show .todoText.
    //v5 ...should tell you if .todos is empty.
    //v5 ...should show .completed.
    displayTodos: function() {
        console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i].todoText);
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

    //It should have a method to change a change Todo item to a new value
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
    }
 };

 




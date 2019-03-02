//Object with todo list items.


 var todoList = {
    todos:['item 1', 'item 2', 'item 3'],
    //Method created from displayTodos stand-alone function.
    displayTodos: function() {
        console.log('My Todos:', this.todos);
    },
    //Method created from addTodo stand-alone function.
    addTodo: function(todo) {
    this.todos.push(todo),
    this.displayTodos();   
    },
    //It should have a method to change a change Todo item to a new value
    //created from changeTodo stand-alone function.
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    //It should have a method to delete a todo item to a new value
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
 };

 todoList.displayTodos();




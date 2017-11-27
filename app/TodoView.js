var TodoView = (function(view){
	/*
	var _todos = [
		new Todo('pierwszy'),
		new Todo('drugi'),
		new Todo('trzeci')
	];
*/
	var _addTodoInput = document.querySelector('#todo-input');


	view.getTodos = function(){
		//return _todos;

		return TodoService.getTodos();
	}

	view.addTodo = function(){
		//alert('add');
		TodoService.addTodo(_addTodoInput.value);
		_addTodoInput.value = '';

		updateView();
	}

	view.deleteTodo = function(todoId){
		TodoService.deleteTodo(todoId);

		updateView();
	}

	view.changeState = function(checkbox, todoId){
		TodoService.changeState(checkbox.checked, todoId);

		updateView();
	}

	view.filterAll = function(){
		updateView();
	}

	view.filterCom = function(){
		filterChecked();
	}
	view.filterNcom = function(){
		filterNotChecked();
	}

	return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function(event){
//App loaded

	TodoRenderer.renderList(TodoView.getTodos());
});

function updateView() {
    TodoRenderer.renderList(TodoService.getTodos());
}

function filterChecked(){
	var newTodos = [];
	var todos = TodoService.getTodos();

	for(var i=0; i<todos.length; i++){
		if(todos[i].isCompleted == true){
			newTodos.push(todos[i]);
		}
	}

	TodoRenderer.renderList(newTodos);
}

function filterNotChecked(){
	var newTodos = [];
	var todos = TodoService.getTodos();

	for(var i=0; i<todos.length; i++){
		if(todos[i].isCompleted == false){
			newTodos.push(todos[i]);
		}
	}

	TodoRenderer.renderList(newTodos);
}
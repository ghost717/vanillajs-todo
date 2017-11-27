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

	return view;

})(TodoView || {});

document.addEventListener("DOMContentLoaded", function(event){
//App loaded

	TodoRenderer.renderList(TodoView.getTodos());
});

function updateView() {
    TodoRenderer.renderList(TodoService.getTodos());
}
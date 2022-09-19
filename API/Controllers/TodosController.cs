using Application.Todos;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class TodosController : BaseApiController
  {

    [HttpGet]
    public async Task<ActionResult<List<Todo>>> GetTodos()
    {
      return await Mediator.Send(new ListTodos.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Todo>> GetTodo(Guid id)
    {
      return await Mediator.Send(new DetailsTodo.Query { id = id });
    }

    [HttpPost]
    public async Task<IActionResult> CreateTodo(Todo todo)
    {
      return Ok(await Mediator.Send(new CreateTodo.Command { Todo = todo }));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTodo(Guid id, Todo todo)
    {
      todo.Id = id;
      return Ok(await Mediator.Send(new UpdateTodo.Command { Todo = todo }));
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTodo(Guid id)
    {
      return Ok(await Mediator.Send(new DeleteTodo.Command { Id = id }));
    }
  }
}
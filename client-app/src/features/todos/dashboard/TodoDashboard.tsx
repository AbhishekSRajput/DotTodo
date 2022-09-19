import { Row, Col } from "antd";
import { ITodo } from "../../../app/models/todo";
import TodoDetails from "../details/TodoDetails";
import TodoForm from "../form/TodoForm";
import TableTodos from "./TableTodos";

interface ITodoDashboard {
	todos: ITodo[];
}

const TodoDashboard = (props: ITodoDashboard) => {
	const { todos } = props;
	return (
		<Row justify='center' gutter={69}>
			<Col span={16}>{todos.length ? <TableTodos todos={todos} /> : null}</Col>
			<Col>
				{todos.length ? <TodoDetails todo={todos[0]} /> : null}
				<div style={{ marginTop: 30 }}>
					<TodoForm />
				</div>
			</Col>
		</Row>
	);
};

export default TodoDashboard;

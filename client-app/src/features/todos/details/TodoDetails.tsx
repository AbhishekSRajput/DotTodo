import { Button, Card, Col, Row, Space, Tag } from "antd";
import { ITodo } from "../../../app/models/todo";
const { Meta } = Card;

interface ITodoDetails {
	todo: ITodo;
}

const TodoDetails = (props: ITodoDetails) => {
	const { todo } = props;
	console.log("details", todo);

	const tagColor = (urgency: string) => {
		switch (urgency.trim()) {
			case "not urgent":
				return "green";
			case "urgent":
				return "orange";
			case "very urgent":
				return "volcano";

			default:
				break;
		}
	};

	return (
		<Card
			style={{
				width: 340,
			}}
			cover={
				<img
					alt='example'
					src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
				/>
			}
		>
			<Meta title={todo.title} description={todo.description} />
			<Meta description={todo.date} />
			<Space direction='vertical' style={{ marginTop: 12 }}>
				<Tag color={tagColor(todo.urgency)}>{todo.urgency.toUpperCase()}</Tag>
				<Space style={{ marginTop: 12 }}>
					<Button>Edit</Button>
					<Button>Cancel</Button>
				</Space>
			</Space>
		</Card>
	);
};

export default TodoDetails;

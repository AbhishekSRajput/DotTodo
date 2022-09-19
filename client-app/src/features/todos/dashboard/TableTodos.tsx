import { Button, Space, Table, Tag } from "antd";
import { ITodo } from "../../../app/models/todo";
const columns = [
	{
		title: "Title",
		dataIndex: "title",
		key: "title",
		render: (text: string) => <div>{text}</div>,
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
	},
	{
		title: "Urgency",
		key: "urgency",
		dataIndex: "urgency",
		render: (_: any, { urgency }: any) => {
			console.log(urgency);
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
			return <Tag color={tagColor(urgency)}>{urgency.toUpperCase()}</Tag>;
		},
	},
	{
		title: "Action",
		key: "action",
		render: (_: any, record: any) => (
			<Space size='middle'>
				<Button type='primary'>View</Button>
				<Button className='tDeleteButton' id='btnDelete'>
					Delete
				</Button>
			</Space>
		),
	},
];

interface ITableTodos {
	todos: ITodo[];
}

const TableTodos = (props: ITableTodos) => {
	const { todos } = props;
	console.log("table", todos);
	return <Table bordered columns={columns} dataSource={todos} />;
};

export default TableTodos;

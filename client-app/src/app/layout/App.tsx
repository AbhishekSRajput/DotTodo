import { useState, useEffect } from "react";
import axios from "axios";
import { DiffOutlined, HeatMapOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { ITodo } from "../models/todo";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import TodoDashboard from "../../features/todos/dashboard/TodoDashboard";

function App() {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		axios.get("http://localhost:5000/api/todos").then((response: any) => {
			setTodos(response.data);
			console.log(response);
		});
	}, []);
	return (
		<Layout>
			<Header style={{ height: "auto", background: "#fff" }}>
				<Menu
					style={{ border: "none" }}
					mode='horizontal'
					defaultSelectedKeys={["two"]}
				>
					<Menu.Item key='one'>
						<span style={{ color: "#ffa940" }}>
							<HeatMapOutlined style={{ fontSize: "28px" }} />
							<span style={{ fontSize: 26 }}>DotTodo</span>
						</span>
					</Menu.Item>
					<Menu.Item key='two'>
						<DiffOutlined />
						Things To Do
					</Menu.Item>
					<Menu.Item key='three'>
						<Button
							type='text'
							icon={<PlusOutlined />}
							style={{ color: "green" }}
						>
							Create To Do
						</Button>
					</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ marginTop: 30, padding: "0 30px" }}>
				<TodoDashboard todos={todos} />
			</Content>
			<Footer>Footer</Footer>
		</Layout>
	);
}

export default App;

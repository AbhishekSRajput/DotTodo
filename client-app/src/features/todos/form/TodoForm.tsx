import { Button, Form, Input, Radio } from "antd";

const App = () => {
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div style={{ background: "red" }}>
			<Form
				style={{ width: 340, background: "pink" }}
				name='todo'
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Title'
					name='title'
					rules={[
						{
							required: true,
							message: "Please input your Title!",
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Title'
					name='title'
					rules={[
						{
							required: true,
							message: "Please input your Title!",
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item label='Urgency'>
					<Radio.Group>
						<Radio value='not-urgent'>Not Urgent </Radio>
						<Radio value='urgent'> Urgent </Radio>
						<Radio value='very-urgent'> Very Urgent </Radio>
					</Radio.Group>
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default App;

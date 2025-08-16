'use client';
import { useMemo } from 'react';
import { Card, Form, Input, Button, Typography, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';

type FormValues = {
	name: string;
	email: string;
	message: string;
};

export default function ContactPage() {
	const [form] = Form.useForm<FormValues>();

	// 你的接收邮箱（也可放到 .env 公共变量中）
	const TO = 'you@example.com';

	const onFinish = async (values: FormValues) => {
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			const data = await res.json();
			if (!res.ok || !data.ok) throw new Error(data.error || "Send failed");

			message.success("Thanks! Your message has been sent.");
			form.resetFields();
		} catch (e: any) {
			message.error(e.message || "Failed to send. Please try again.");
		}
	};


	const rules = useMemo(
		() => ({
			name: [{ required: true, message: 'Please enter your name' }],
			email: [
				{ required: true, message: 'Please enter your email' },
				{ type: 'email' as const, message: 'Invalid email address' }
			],
			message: [{ required: true, message: 'Please enter your message' }]
		}),
		[]
	);

	return (
		<div style={{ padding: 24 }}>
			<Typography.Title level={1} style={{ marginBottom: 16 }}>
				Contact
			</Typography.Title>

			<Card
				style={{ borderRadius: 16 }}
				bodyStyle={{ padding: 24 }}
			>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					requiredMark="optional"
					style={{ maxWidth: 960 }}
				>
					<Form.Item label={<Label text="Name" />} name="name" rules={rules.name}>
						<Input size="large" placeholder="Your name" />
					</Form.Item>

					<Form.Item label={<Label text="Email" />} name="email" rules={rules.email}>
						<Input size="large" placeholder="you@example.com" />
					</Form.Item>

					<Form.Item label={<Label text="Message" />} name="message" rules={rules.message}>
						<Input.TextArea
							size="large"
							placeholder="How can I help?"
							autoSize={{ minRows: 6 }}
						/>
					</Form.Item>

					<Form.Item style={{ marginTop: 8 }}>
						<Button
							type="primary"
							danger
							size="large"
							icon={<MailOutlined />}
							htmlType="submit"
						>
							Send
						</Button>
					</Form.Item>
				</Form>
			</Card>

			{/* 背景淡灰，圆角大容器的气质 */}
			<style jsx global>{`
        body {
          background: #f5f5f5;
        }
        .ant-form-item-label > label {
          font-weight: 600;
        }
      `}</style>
		</div>
	);
}

function Label({ text }: { text: string }) {
	return (
		<span>
			<span style={{ color: '#ff4d4f', marginRight: 6 }}>*</span>
			{text}
		</span>
	);
}

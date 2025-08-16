'use client';
import { Typography, Space } from 'antd';
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

export default function Footer() {
  return (
    <div
      style={{
        padding: '24px',
        textAlign: 'center',
        marginTop: '48px',
      }}
    >
      <Typography.Text>
        © {new Date().getFullYear()} Daisy (Yitong) Pei. All rights reserved.{' '}
        <Space>
          <a href="mailto:yitongp22@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailOutlined /> Email
          </a>
          <a href="https://www.linkedin.com/in/daisy-p-b67763211/" target="_blank" rel="noopener noreferrer">
            <LinkedinOutlined /> LinkedIn
          </a>
          <a href="https://github.com/1tongp" target="_blank" rel="noopener noreferrer">
            <GithubOutlined /> GitHub
          </a>
        </Space>
      </Typography.Text>

    </div>
  );
}

'use client';
import { Card, Tag, Space, Typography } from 'antd';
import type { Project } from '@/data/projects';
import { GithubOutlined, LinkOutlined, FileTextOutlined } from '@ant-design/icons';

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Card
      id={p.id}
      title={
        <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
          <Space>
            <Typography.Text strong>{p.title}</Typography.Text>
            <Tag>{p.year}</Tag>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer">
                <LinkOutlined />
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <GithubOutlined />
              </a>
            )}
            {p.paper && (
              <a href={p.paper} target="_blank" rel="noopener noreferrer">
                <FileTextOutlined />
              </a>
            )}
          </Space>
        </div>
      }
    >
      <Space wrap size={[8, 8]} style={{ marginBottom: 8 }}>
        {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </Space>
      <div style={{ marginBottom: 8 }}>{p.summary}</div>
      {p.metrics && (
        <Space>
          {p.metrics.map(m => (
            <Tag key={m.label}>{m.label}: {m.value}</Tag>
          ))}
        </Space>
      )}
    </Card>
  );
}

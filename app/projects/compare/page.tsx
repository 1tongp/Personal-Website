'use client';
import { Table, Tooltip, Button, Space } from 'antd';
import { CheckCircleTwoTone, MinusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { projects } from '@/data/projects';
import { useRouter } from 'next/navigation';

type Skill = { key: string; label: string; abbr: string };

const SKILLS: Skill[] = [
  { key: 'RAG', label: 'RAG', abbr: 'RAG' },
  { key: 'OpenAI', label: 'OpenAI', abbr: 'OpenAI' },
  { key: 'LLM', label: 'Large Language Model', abbr: 'LLM' },
  { key: 'React', label: 'React', abbr: 'React' },
  { key: 'Flask', label: 'Flask', abbr: 'Flask' },
  { key: 'MongoDB', label: 'MongoDB', abbr: 'Mongo' },
  { key: 'Express', label: 'Express', abbr: 'Express' },
  { key: 'Node.js', label: 'Node.js', abbr: 'Node' },
  { key: 'Metaverse', label: 'Metaverse', abbr: 'Metaverse' },
  { key: 'Recommendation System', label: 'Recommendation System', abbr: 'RecSys' },
  { key: 'PHP', label: 'PHP', abbr: 'PHP' },
  { key: 'C#', label: 'C#', abbr: 'C#' },
  { key: 'Unity', label: 'Unity', abbr: 'Unity' }
];

export default function ComparePage() {
  const router = useRouter();

  const data = projects.map(p => ({
    key: p.id,
    project: p.title,
    ...Object.fromEntries(SKILLS.map(s => [s.key, p.tags.includes(s.key)]))
  }));

  const columns = [
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      fixed: 'left' as const,
      width: 260
    },
    ...SKILLS.map(s => ({
      title: (
        <Tooltip title={s.label}>
          <span className="skill-hdr">{s.abbr}</span>
        </Tooltip>
      ),
      dataIndex: s.key,
      key: s.key,
      align: 'center' as const,
      width: 90,
      render: (v: boolean) =>
        v ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <MinusOutlined style={{ color: '#bbb' }} />
    }))
  ];

  return (
    <div className="compare-wrap">
      <Space direction="vertical" style={{ width: "100%" }}>
        {/* Back Button */}
        <Button
          type="default"
          icon={<ArrowLeftOutlined />}
          onClick={() => router.back()}
        >
          Back
        </Button>

        <Table
          size="small"
          columns={columns}
          dataSource={data}
          scroll={{ x: 1200 }}
          pagination={false}
          sticky
        />
      </Space>
      <style jsx>{`
        .compare-wrap :global(.ant-table) { font-size: 13px; }
        .skill-hdr {
          display: inline-block;
          white-space: nowrap;
          font-weight: 600;
          letter-spacing: .2px;
        }
      `}</style>
    </div>
  );
}

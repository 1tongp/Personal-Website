'use client';
import {Row, Col, Space, Typography, Button, Card, Tag, Table} from 'antd';
import {
  DownloadOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined
} from '@ant-design/icons';
import {projects} from '@/data/projects'; // ✅ 用于统计项目数量

const LINKS = {
  resume: '/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/daisy-p-b67763211/',
  github: 'https://github.com/1tongp',
  email: 'mailto:yitongp22@gmail.com',
  vcf: '/yitong.vcf' 
};

export default function Page() {
  // calcuate total projects and AI projects
  const totalProjects = projects.length;
  const aiProjects = projects.filter(p => p.role === 'AI' || p.role === 'Both').length;

  const statsData = [
    { key: 'total', label: 'Total Projects', value: totalProjects },
    { key: 'ai', label: 'AI Projects', value: aiProjects }
  ];

  return (
    <div style={{padding: 24}}>

      {/* Hero + Availability */}
      <Row gutter={[24, 24]} align="top">
        <Col xs={24} lg={16}>
          <Space direction="vertical" size={20} style={{width: '100%'}}>
            <Typography.Title style={{margin: 0}} level={1}>
              Hi, I’m Daisy (Yitong) Pei 👋
            </Typography.Title>
            <Typography.Paragraph style={{fontSize: 18, marginBottom: 8}}>
              Automation Test Anyalst | Software Engineer | AI Enthusiast in Melbourne. I build data-aware apps,
              automation, and GenAI features that ship.
            </Typography.Paragraph>

            {/* CTA */}
            <Space wrap size="middle">
              <a href={LINKS.resume} download>
                <Button type="primary" danger size="large" icon={<DownloadOutlined />}>
                  Download Résumé
                </Button>
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                <Button size="large" icon={<LinkedinOutlined />}>LinkedIn</Button>
              </a>
              <a href={LINKS.github} target="_blank" rel="noreferrer">
                <Button size="large" icon={<GithubOutlined />}>GitHub</Button>
              </a>
              <a href={LINKS.email}>
                <Button size="large" icon={<MailOutlined />}>Email</Button>
              </a>
              {/* ✅ 新增：下载 vCard */}
              <a href={LINKS.vcf} download>
                <Button size="large">Download vCard (.vcf)</Button>
              </a>
            </Space>

            {/* 技能 Pills */}
            <Space wrap size={[8, 8]} style={{marginTop: 8}}>
              <SkillPill color="#ffccc7">React</SkillPill>
              <SkillPill color="#bae7ff">JavaScript</SkillPill>
              <SkillPill color="#ffd6e7">Playwright</SkillPill>
              <SkillPill color="#d6e4ff">Node.js</SkillPill>
              <SkillPill color="#d9f7be">RAG/LLM</SkillPill>
            </Space>
          </Space>
        </Col>
        <Col xs={24} lg={8}>
          <Card style={{borderRadius: 16}} bodyStyle={{padding: 24}}>
            <Typography.Title level={3} style={{textAlign: 'center', marginTop: 4}}>
              Availability
            </Typography.Title>
            <Typography.Paragraph style={{textAlign: 'center', marginBottom: 0, fontSize: 16}}>
              Open to AI Engineer roles · Melbourne/Sydney · Hybrid
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>

      {/* About */}
      <div style={{marginTop: 48}}>
        <Typography.Title level={2}>About</Typography.Title>
        <Typography.Paragraph style={{fontSize: 16}}>
          I am a result-driven Full Stack & AI Engineer with a Master’s in AI and a Bachelor’s in Computer Science, experienced in
          delivering AI-powered applications, automation testing frameworks, and scalable web/mobile solutions. Skilled in
          LLMs, and RAG to digitise workflows, reduce manual effort, and enhance user experience, with strong skills in
          Agile/DevOps, stakeholder communication, and cross-functional collaboration.
        </Typography.Paragraph>

        <Table
          dataSource={[
            {key: '1', label: 'Location', value: 'Melbourne, Australia'},
            {key: '2', label: 'Focus', value: 'Software Development, Playwright Automation Testing, LLM, RAG'},
            {key: '3', label: 'Education', value: 'BSc Computer Science at the University of Melbourne, M.Sc AI at the Nanyang Technological University Singapore'},
          ]}
          columns={[
            {title: '', dataIndex: 'label', key: 'label'},
            {title: '', dataIndex: 'value', key: 'value'}
          ]}
          pagination={false}
          showHeader={false}
          bordered
        />
      </div>

      {/* Highlights */}
      <div style={{marginTop: 32}}>
          <Typography.Title level={2}>Highlights</Typography.Title>
          <ul style={{fontSize: 16, lineHeight: 1.8}}>
            <li>Delivered AI-powered applications including a PDF Q&amp;A chatbot (RAG + OpenAI + FAISS) that reduced document search time by 70%.</li>
            <li>Developed RAG-based health report systems integrating fine-tuned models into chatbot interfaces for donor queries.</li>
            <li>Built and maintained automated regression and end-to-end Playwright test suites, integrated with CI/CD pipelines to boost release quality.</li>
            <li>Hands-on with full-stack delivery (React, React Native, Node.js, Flask, FastAPI) and AI/ML frameworks (RAG, LangChain, LLM integration, vector databases).</li>
            <li>Proven ability to mentor junior analysts, lead workshops on Agile/DevOps practices in Unimelb, and translate AI models into user-friendly products.</li>
          </ul>
      </div>


      {/* ✅ Projects 统计卡片 */}
      <div style={{ marginTop: 32 }}>
        <Typography.Title level={2}>Projects</Typography.Title>
        <Row gutter={[16, 16]}>
          {statsData.map((item) => (
            <Col xs={24} sm={12} md={8} key={item.label}>
              <Card
                bordered
                style={{ borderRadius: 12, textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              >
                <Typography.Text type="secondary">{item.label}</Typography.Text>
                <Typography.Title level={3} style={{ margin: 8 }}>
                  {item.value}
                </Typography.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

    </div>
  );
}

/** 彩色技能 Pill */
function SkillPill({children, color}:{children: React.ReactNode; color: string}) {
  return (
    <Tag
      style={{
        borderRadius: 999,
        padding: '4px 10px',
        border: 'none',
        background: color,
        color: '#333',
        fontWeight: 500
      }}
    >
      {children}
    </Tag>
  );
}

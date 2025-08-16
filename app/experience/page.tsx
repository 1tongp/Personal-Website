'use client';
import { Card, Timeline, Typography, Row, Col } from 'antd';

type Role = {
  title: string;
  company?: string;
  start: string;
  end: string;
  location: string;
  summary: string | string[];
};

type Edu = {
  school: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  notes?: string | string[];
};

const ROLES: Role[] = [
  {
    title: 'Automation Test Analyst',
    company: 'Australian Red Cross Lifeblood',
    start: 'Jul 2025',
    end: 'Present',
    location: 'Melbourne',
    summary: [
      'Developed and maintained automated regression and end-to-end test suites using Playwright, improving defect detection rates and increasing test coverage across donor-facing and internal applications.',
      'Integrated automated tests into the CI/CD pipeline and conducted root-cause analysis for failures, implementing optimisations that improved test reliability, execution speed, and release quality.',
      'Collaborated with developers, product owners, and business analysts to analyse requirements, design test cases, and ensure smooth delivery in an Agile DevOps environment.',
      'Led and mentored Graduate Test Analysts, providing guidance on automation best practices, code reviews, and troubleshooting to accelerate onboarding and enhance team output.'
    ]
  },

  {
    title: 'Graduate Software Engineer (Rotation)',
    company: 'Australian Red Cross Lifeblood',
    start: 'Jan 2024',
    end: 'Jun 2025',
    location: 'Melbourne',
    summary: [
      'Rotated across DevOps, automation testing, mobile development, and independent product delivery, creating solutions for donor - facing and internal applications.',
      'DevOps Engineer: Delivered internal Node.js/React applications and an AI PDF Q&A chatbot (RAG + OpenAI) that allows users to upload PDF documents and ask natural language questions, cutting document search time by 70 % and improving knowledge accessibility across the organisation.',
      'Automation Tester: Built Playwright regression suites integrated with CI/CD, boosting defect detection, increasing ccoverage, and reducing post - release issues.',
      'Mobile Developer: Delivered React Native features for the donor app, improving API integration and optimising UI performance, which reduced load time by 25 % and enhanced donor experience.',
      'Independent Product Development: Built a PowerApps Agile Estimation tool for anonymous story point voting, removing bias and improving sprint planning efficiency.'
    ]
  },
  {
    title: 'CIS Academic Tutor (Part-Time)',
    company: 'University of Melbourne',
    start: 'Jul 2023',
    end: 'Present',
    location: 'Melbourne',
    summary: [
      'Supervised student teams in capstone IT Project (COMP30022), providing technical guidance, code review, and delivering workshops on Agile Development, DevOps Practices, and Code Quality & Testing Standards.'
    ]
  },
  {
    title: 'Front-end Developer Intern',
    company: 'Digital Artery Pty Ltd',
    start: 'Dec 2020',
    end: 'Feb 2021',
    location: 'Melbourne',
    summary: [
      'Collaborated with clients to determine project requirements and create a comprehensive project plan.',
      'Designed and developed a mobile-terminal electronic menu and business-end control module using HTML, CSS, and React library.'
    ]
  }
];

const EDUCATION: Edu[] = [
  {
    school: 'Nanyang Technological University (NTU)',
    degree: 'MSc in Artificial Intelligence',
    start: 'Aug 2022',
    end: 'Jan 2024',
    location: 'Singapore',
    notes: [
      'Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, AI Ethics',
      'GPA: 4.4/5.0',
    ]
  },
  {
    school: 'Nanyang Technological University (NTU)',
    degree: 'Exchange Program, School of Computer Science and Engineering',
    start: 'Jan 2022',
    end: 'May 2022',
    location: 'Singapore',
    notes: [
      'Excahnge program at NTU, focusing on computer engineering.',
      'Awarded Melbourne Global Scholars Award from Unimelb for outstanding academic performance.',
    ]
  },
  {
    school: 'University of Melbourne',
    degree: 'BSc in Computing and Software Systems (First Class Honours, WAM 83.6)',
    start: 'Mar 2020',
    end: 'Jul 2022',
    location: 'Melbourne',
    notes: [
      'Relevant Coursework: Software Engineering, Data Structures and Algorithms, Database Systems, Web Development',
      'WAM: 83.6/100',
      'Awarded Melbourne International Scholarship for outstanding academic performance and Melbourne Leadership Awards for contribution to the university community.',
      'Transcript: [View here](https://www.myequals.net/sharelink/5d257d95-936b-48c4-bcfd-a76a9d1c7340/36e58e30-8ea9-44b6-9d97-9a2358dab92d)',
    ]
  }
];

export default function ExperiencePage() {
  return (
    <div className="page">
      <Typography.Title level={1} style={{ marginBottom: 16 }}>
        Experience
      </Typography.Title>

      <Card className="panel" bodyStyle={{ padding: 24, paddingBottom: 8 }}>
        <Timeline
          className="exp-timeline"
          items={ROLES.map((r) => ({
            color: 'red',
            children: (
              <div className="entry">
                <Typography.Text strong style={{ fontSize: 18 }}>
                  {r.title}
                  {r.company ? (
                    <>
                      {' — '}
                      <span style={{ fontWeight: 700 }}>{r.company}</span>
                    </>
                  ) : null}
                </Typography.Text>

                <div className="meta">
                  {r.start} – {r.end}
                  {r.location ? ` · ${r.location}` : ''}
                </div>

                <div className="summary">
                  {Array.isArray(r.summary) ? (
                    <ul>
                      {r.summary.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  ) : (
                    r.summary
                  )}
                </div>
              </div>
            )
          }))}
        />
      </Card>

      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Typography.Title level={2} style={{ marginTop: 24, marginBottom: 16 }}>
            Education
          </Typography.Title>
        </Col>
        <Col span={24}>
          <Card className="panel" bodyStyle={{ padding: 24 }}>
            <Timeline
              className="edu-timeline"
              items={EDUCATION.map((e) => ({
                color: 'red',
                children: (
                  <div className="entry">
                    <Typography.Text strong style={{ fontSize: 18 }}>
                      {e.degree} — <span style={{ fontWeight: 700 }}>{e.school}</span>
                    </Typography.Text>
                    <div className="meta">
                      {e.start} – {e.end}
                      {e.location ? ` · ${e.location}` : ''}
                    </div>
                    {e.notes ? <div className="summary">{Array.isArray(e.notes) ? (
                      <ul>
                        {e.notes.map((s, i) => (
                          <li key={i}>
                            {s.startsWith('Transcript:') ? (
                              <a href={s.match(/\((.*?)\)/)?.[1]} target="_blank" rel="noopener noreferrer">
                                Transcript
                              </a>
                            ) : (
                              s
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      e.notes
                    )}
                    </div> : null}
                  </div>
                )
              }))}
            />
          </Card>
        </Col>
      </Row>

      <style jsx>{`
        .page {
          padding: 24px;
          min-height: 100%;
        }
        .panel {
          border-radius: 16px;
        }
        :global(.exp-timeline .ant-timeline-item-head),
        :global(.edu-timeline .ant-timeline-item-head) {
          border-color: #ff4d4f;
          background: #fff;
        }
        :global(.exp-timeline .ant-timeline-item-tail),
        :global(.edu-timeline .ant-timeline-item-tail) {
          border-inline-start: 2px solid #e8e8e8;
        }
        .entry {
          margin-bottom: 8px;
        }
        .meta {
          color: #5b5b5b;
          margin-top: 4px;
          font-size: 14px;
        }
        .summary {
          margin-top: 6px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}

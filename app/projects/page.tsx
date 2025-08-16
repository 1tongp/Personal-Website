'use client';
import {useMemo, useState} from 'react';
import {Row, Col, Divider} from 'antd';
import ProjectCard from '@/components/ProjectCard';
import TagFilterBar, {Filters} from '@/components/TagFilterBar';
import {projects} from '@/data/projects';
import Link from 'next/link';

export default function ProjectsPage(){
  const [filters, setFilters] = useState<Filters>({role:'All', tags:[]});
  const list = useMemo(()=> {
    return projects.filter(p => {
      if (filters.role !== 'All' && p.role !== filters.role) return false;
      if (filters.year && p.year !== filters.year) return false;
      if (filters.tags?.length && !filters.tags.every(tag => p.tags.includes(tag))) return false;
      return true;
    });
  }, [filters]);

  return (
    <div>
      <h1>Projects</h1>
      <TagFilterBar value={filters} onChange={setFilters} />
      <Divider />
      <Row gutter={[16,16]}>
        {list.map(p => (
          <Col xs={24} md={12} key={p.id}><ProjectCard p={p} /></Col>
        ))}
      </Row>
    </div>
  );
}

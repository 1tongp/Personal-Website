'use client';
import {Segmented, Select, Space} from 'antd';
import {allTags} from '@/data/projects';
import Link from 'next/link';
export type Filters = { role: 'All'|'SWE'|'AI'; year?: number; tags: string[] };

export default function TagFilterBar({value, onChange}:{value:Filters; onChange:(v:Filters)=>void}){
  return (
    <Space wrap>
      <Segmented options={['All','SWE','AI']} value={value.role} onChange={(v)=>onChange({...value, role: v as Filters['role']})} />
      <Select
        allowClear placeholder="Year"
        style={{width:120}}
        options={[2021,2022,2023,2024,2025].map(y=>({value:y, label:String(y)}))}
        value={value.year}
        onChange={(y)=>onChange({...value, year:y})}
      />
      <Select
        mode="multiple" allowClear placeholder="Tags"
        style={{minWidth:260}}
        options={allTags.map(t=>({value:t, label:t}))}
        value={value.tags}
        onChange={(tags)=>onChange({...value, tags})}
      />
      <Link href="/projects/compare">Compare Projects</Link>
    </Space>
  );
}

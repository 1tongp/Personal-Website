'use client';
import React, {useMemo, useState} from 'react';
import {Drawer, Input, List, Tag} from 'antd';
import Fuse from 'fuse.js';
import {projects} from '@/data/projects';
import Link from 'next/link';

export default function SearchDrawer({open, onClose}:{open:boolean; onClose:()=>void}){
  const [q, setQ] = useState('');
  const fuse = useMemo(()=> new Fuse(projects, {keys:['title','summary','tags'], threshold:0.3}), []);
  const results = q ? fuse.search(q).map(r=>r.item) : projects.slice(0,8);
  return (
    <Drawer title="Search ⌘K" placement="top" height={360} open={open} onClose={onClose}>
      <Input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects, keywords..." style={{marginBottom:16}}/>
      <List
        dataSource={results}
        renderItem={(p)=> (
          // <List.Item actions={[<Link key="v" href={`/projects#${p.id}`}>View</Link>] }>
          <List.Item>
            <List.Item.Meta title={p.title} description={p.summary} />
            <div>{p.tags.map(t=> <Tag key={t}>{t}</Tag>)}</div>
          </List.Item>
        )}
      />
    </Drawer>
  );
}

'use client';
import {useState} from 'react';
import {Card, Space, Form, Input, Select, InputNumber, Button, Typography, message} from 'antd';
import {utils, writeFileXLSX} from 'xlsx';

const TYPES = ['name','email','phone','integer','float','date','boolean','uuid','city'];

function genValue(type:string, i:number){
  switch(type){
    case 'name': return `User ${i+1}`;
    case 'email': return `user${i+1}@example.com`;
    case 'phone': return `04${Math.floor(100000000 + Math.random()*89999999)}`;
    case 'integer': return Math.floor(Math.random()*1000);
    case 'float': return Math.round((Math.random()*1000 + Math.random())*100)/100;
    case 'date': return new Date(Date.now() - Math.floor(Math.random()*86400*1000*365)).toISOString().slice(0,10);
    case 'boolean': return Math.random() > 0.5;
    case 'uuid': return (globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`);
    case 'city': return ['Melbourne','Sydney','Brisbane','Perth','Adelaide'][Math.floor(Math.random()*5)];
    default: return '';
  }
}

export default function TestDataGen(){
  const [fields, setFields] = useState<{name:string; type:string}[]>([{name:'id', type:'uuid'}]);
  const [rows, setRows] = useState<number>(20);

  const onAdd = ()=> setFields([...fields, {name:'field_'+(fields.length+1), type:'integer'}]);

  const generate = ()=>{
    if (!fields.length) return message.warning('Please add at least one field');
    const data = Array.from({length: rows}, (_, i) => Object.fromEntries(fields.map(f=>[f.name, genValue(f.type, i)])));
    return data;
  };

  const downloadCsv = ()=>{
    const data = generate();
    if (!data) return;
    const ws = utils.json_to_sheet(data as any[]);
    const csv = utils.sheet_to_csv(ws);
    const blob = new Blob([csv], {type:'text/csv'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'test-data.csv'; a.click();
  };

  const downloadXlsx = ()=>{
    const data = generate(); if (!data) return;
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(data as any[]);
    utils.book_append_sheet(wb, ws, 'data');
    writeFileXLSX(wb, 'test-data.xlsx');
  };

  return (
    <Space direction="vertical" size={16} style={{width:'100%'}}>
      <Typography.Title level={2}>Test Data Generator</Typography.Title>
      <Typography.Paragraph>Define fields and generate CSV/Excel test data locally.</Typography.Paragraph>
      <Card>
        <Space direction="vertical" style={{width:'100%'}} size={12}>
          {fields.map((f, idx)=> (
            <Space key={idx} wrap>
              <Input value={f.name} onChange={e=>{const v=[...fields]; v[idx] = {...f, name:e.target.value}; setFields(v);}} placeholder="Field" style={{width:240}}/>
              <Select value={f.type} onChange={(val)=>{const v=[...fields]; v[idx] = {...f, type:val}; setFields(v);}} options={TYPES.map(x=>({value:x, label:x}))} style={{width:180}}/>
            </Space>
          ))}
          <Button onClick={onAdd}>Add Field</Button>

          <Form layout="inline">
            <Form.Item label="Rows">
              <InputNumber min={1} max={10000} value={rows} onChange={(v)=>setRows(Number(v))}/>
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" onClick={downloadCsv}>Download CSV</Button>
                <Button onClick={downloadXlsx}>Download Excel</Button>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </Space>
  );
}

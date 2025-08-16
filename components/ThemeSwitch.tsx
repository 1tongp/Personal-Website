'use client';
import {Switch} from 'antd';
import {BulbOutlined, BulbFilled} from '@ant-design/icons';
export default function ThemeSwitch({isDark,onToggle}:{isDark:boolean; onToggle:()=>void}){
  return <Switch checked={isDark} onChange={onToggle} checkedChildren={<BulbFilled/>} unCheckedChildren={<BulbOutlined/>}/>;
}

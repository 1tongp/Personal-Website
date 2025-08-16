'use client';
import React, { useMemo, useState } from 'react';
import { Layout, Menu, Button, Space, Tooltip, Drawer, Grid } from 'antd';
import {
  FilePdfOutlined,
  IdcardOutlined,
  SearchOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';

const { useBreakpoint } = Grid;

type Props = {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
};

export default function HeaderBar({ isDark, onToggleTheme, onOpenSearch }: Props) {
  const pathname = usePathname();
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  //   const items = [
  //     {key:'home', label:<Link href="/">Home</Link>},
  //     // {key:'about', label:<Link href="/about">About</Link>},
  //     {key:'projects', label:<Link href="/projects">Projects</Link>},
  //     // {key:'writing', label:<Link href="/writing">Writing</Link>},
  //     // {key:'ai', label:<Link href="/ai/test-data">AI Lab</Link>},
  //     {key:'experience', label:<Link href="/experience">Experience</Link>},
  //     // {key:'contact', label:<Link href="/contact">Contact</Link>},
  //   ];

  const items = useMemo(
    () => [
      { key: 'home', label: <Link href="/">Home</Link> },
      { key: 'projects', label: <Link href="/projects">Projects</Link> },
      { key: 'experience', label: <Link href="/experience">Experience</Link> },
      // 想启用更多路由就继续加：
      // { key: 'contact', label: <Link href="/contact">Contact</Link> },
    ],
    []
  );

  // 动态选中当前 tab
  const selectedKey = useMemo(() => {
    if (pathname?.startsWith('/projects')) return 'projects';
    if (pathname?.startsWith('/experience')) return 'experience';
    return 'home';
  }, [pathname]);

  // 是否为桌面视图（>= md）
  const isDesktop = screens.md;

  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        paddingInline: 16,
        gap: 12,
      }}
    >
      {/* 左侧 Logo / Title */}
      <Link href="/" aria-label="Go to Home" style={{ color: '#fff', fontWeight: 700, marginRight: 8 }}>
        Daisy · Portfolio
      </Link>

      {/* 桌面：横向菜单 ；移动：留空 */}
      {isDesktop ? (
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          selectedKeys={[selectedKey]}
          style={{ flex: 1, minWidth: 0 }}
        />
      ) : (
        <div style={{ flex: 1 }} />
      )}

      {/* 桌面 CTA */}
      {isDesktop ? (
        <Space>
          <Tooltip title="Search">
            <Button aria-label="Search" icon={<SearchOutlined />} onClick={onOpenSearch} />
          </Tooltip>
          <a href="/resume.pdf" download>
            <Button icon={<FilePdfOutlined />}>Resume</Button>
          </a>
          <a href="/yitong.vcf" download>
            <Button icon={<IdcardOutlined />}>vCard</Button>
          </a>
          <ThemeSwitch isDark={isDark} onToggle={onToggleTheme} />
        </Space>
      ) : (
        // 移动端：汉堡按钮
        <Space>
          <ThemeSwitch isDark={isDark} onToggle={onToggleTheme} />
          <Button
            aria-label="Open menu"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </Space>
      )}

      {/* 移动端 Drawer 菜单 */}
      <Drawer
        placement="right"
        width={280}
        open={open}
        onClose={() => setOpen(false)}
        title="Menu"
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={[
            ...items,
            { type: 'divider' as const },
            {
              key: 'search',
              label: (
                <button
                  onClick={() => {
                    setOpen(false);
                    onOpenSearch();
                  }}
                  style={{ all: 'unset', cursor: 'pointer' }}
                >
                  🔎 Search
                </button>
              ),
            },
            {
              key: 'resume',
              label: (
                <a href="/resume.pdf" download>
                  <FilePdfOutlined /> Resume
                </a>
              ),
            },
            {
              key: 'vcard',
              label: (
                <a href="/yitong.vcf" download>
                  <IdcardOutlined /> vCard
                </a>
              ),
            },
          ]}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </Layout.Header>
  );
}

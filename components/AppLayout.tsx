'use client';
import React, {useMemo, useState, useEffect} from 'react';
import {ConfigProvider, theme, Layout, FloatButton} from 'antd';
import HeaderBar from './HeaderBar';
import SearchDrawer from './SearchDrawer';
import Footer from './Footer';
export default function AppLayout({children}: {children: React.ReactNode}) {
  const [isDark, setIsDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('pref-theme') : null;
    if (saved) setIsDark(saved === 'dark');
  }, []);

  const algorithm = useMemo(() => (
    isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
  ), [isDark]);

  const onToggleTheme = () => {
    setIsDark(prev => {
      const next = !prev; if (typeof window !== 'undefined') localStorage.setItem('pref-theme', next ? 'dark' : 'light'); return next;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
      if (isCmdK) { e.preventDefault(); setSearchOpen(true); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <ConfigProvider theme={{algorithm}}>
      <Layout style={{minHeight: '100vh'}}>
        <HeaderBar isDark={isDark} onToggleTheme={onToggleTheme} onOpenSearch={() => setSearchOpen(true)} />
        <Layout.Content style={{padding: 24, maxWidth: 1200, margin: '0 auto', width: '100%'}}>
          {children}
        </Layout.Content>
        <SearchDrawer open={searchOpen} onClose={() => setSearchOpen(false)} />
        <FloatButton.BackTop />
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

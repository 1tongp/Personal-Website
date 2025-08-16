import '@/styles/globals.css';
import AppLayout from '@/components/AppLayout';

export const metadata = {
  title: 'Daisy (Yitong) Pei',
  description: 'Daisy Yitong Pei`s personal website | Automation Test Analyst | Software Engineer | AI Enthusiast in Melbourne. Building data-aware apps, automation, and GenAI features that ship.',
  icons: {
    icon: '/favicon.ico',   
  },
};


export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}



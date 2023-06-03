import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FlowBolo | Create flows in seconds',
  description:
    'FlowBolo is a no-code platform to create flows in seconds. It is the easiest way to automate your business processes.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.flowbolo.com',
    title: 'FlowBolo | Create flows in seconds',
    description:
      'FlowBolo is a no-code platform to create flows in seconds. It is the easiest way to automate your business processes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduGen - AI Question Generator',
  description: 'Generate educational questions from text using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove Grammarly attributes to prevent hydration warnings
              (function() {
                if (typeof window !== 'undefined') {
                  const observer = new MutationObserver(() => {
                    document.body?.removeAttribute('data-new-gr-c-s-check-loaded');
                    document.body?.removeAttribute('data-gr-ext-installed');
                  });
                  if (document.body) {
                    observer.observe(document.body, { attributes: true });
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import Background from '@/components/Background'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      
      <body style={{
        overflow : "auto",
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

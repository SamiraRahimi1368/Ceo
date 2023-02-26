export const metadata = {
  title: 'Sceo',
  description: 'Created by Me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

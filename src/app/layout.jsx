import '@/styles/globals.css'

export const metadata = {
  title: {
    template: '%s by Ching Yen',
    default: "Ching Yen's Portfolio Website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  )
}

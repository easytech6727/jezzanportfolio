import './globals.css'

export const metadata = {
  title: 'Mohamed Jezan | Quantity Surveyor',
  description: 'Professional Quantity Surveyor with 2.5 years experience in construction. Skilled in BOQ, estimation, AutoCAD, and cost control.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

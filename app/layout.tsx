import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html">
      <body className="body">
        {children}
      </body>
    </html>
  );
}

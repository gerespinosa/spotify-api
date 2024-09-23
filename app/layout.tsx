import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-full flex flex-col justify-center items-center">
        {children}
      </body>
    </html>
  );
}

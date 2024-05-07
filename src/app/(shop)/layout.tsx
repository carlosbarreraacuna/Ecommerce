  export default function ShopLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es">
        <head>
          {/* Puedes agregar metadatos aquí */}
        </head>
        <body>
          <main className="min-h-screen bg-red-500">{children}</main>
        </body>
      </html>
    );
  }

export default function ShopLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="es">
        <main className="min-h-screen bg-red-500">
            {children}
        </main>
      </html>
    );
  }

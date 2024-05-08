import { TopMenu } from "@/app/components/ui/top-menu/TopMenu";
  
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
          <TopMenu/>
          <main className="min-h-screen">{children}</main>
        </body>
      </html>
    );
  }

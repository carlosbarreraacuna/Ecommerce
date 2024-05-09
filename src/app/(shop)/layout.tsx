import { TopMenu } from "@/app/components/ui/top-menu/TopMenu";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <TopMenu />

      <div className="px-0  sm:px-10">{children}</div>
    </main>
  );
}

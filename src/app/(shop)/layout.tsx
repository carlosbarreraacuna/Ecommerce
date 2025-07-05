import { TopMenu } from "@/app/components/ui/top-menu/TopMenu";
import { Sidebar } from "@/app/components/ui/sidebar/Sidebar";

export default function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen">

      <TopMenu />
      <Sidebar />

      <div className="px-0 sm:px-10">
        { children }

      </div>
    </main>
  );
}
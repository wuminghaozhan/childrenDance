import SideNav from '@/app/ui/dashboard/sidenav';
import TopNav from '../ui/components/topBar';
import Footer from '../ui/components/footer';
export const experimental_ppr = true;
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen min-h-screen flex-col">
      <TopNav />
      <div className="flex-grow flex-1 p-6 md:overflow-y-auto">{children}</div>
      <Footer />
    </div>
  );
}
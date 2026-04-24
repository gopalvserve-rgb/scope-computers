import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InquiryPopup from '@/components/InquiryPopup';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <InquiryPopup />
    </>
  );
}

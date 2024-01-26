import Footer from './Footer';
import Header from './Header';

export type ChildProps = {
   children: React.ReactNode;
};

const Layout = ({ children }: ChildProps) => {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
      </>
   );
};

export default Layout;

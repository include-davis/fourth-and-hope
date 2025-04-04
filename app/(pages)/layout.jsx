import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import './_globals/globals.scss';
// import styles from '@app/(pages)/_globals/globals.scss';

export const metadata = {
  title: "Fourth & Hope",
  description: "Fourth & Hope Website",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

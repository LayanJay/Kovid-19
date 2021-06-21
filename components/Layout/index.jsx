import Head from "next/head";

// components
import Container from "./Container";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <Container>
        <main className="my-5">{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

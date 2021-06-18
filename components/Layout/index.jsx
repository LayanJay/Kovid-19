import Container from "./Container";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Nav />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;

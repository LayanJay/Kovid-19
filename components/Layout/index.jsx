import Container from "./Container";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>
        <main className="my-5">{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

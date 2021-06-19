import Layout from "../components/Layout";
import MenuBar from "../components/MenuBar";

const BeInform = () => {
  return (
    <Layout title="Be Inform">
      <h1>Find out the current situation around you</h1>
      <img
        src="/location.svg"
        alt="location"
        width={200}
        height={200}
        loading="lazy"
      />
      <MenuBar />
    </Layout>
  );
};

export default BeInform;

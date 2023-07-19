import Footer from "../components/Footer";
import Header from "../components/Header";
import ListOptions from "../components/ListOptions";
import CatalogList from "../components/ThreadsList";

const CatalogPage = () => (
  <>
    <Header pageType="catalog" />
    <ListOptions />
    <CatalogList />
    <Footer />
  </>
);

export default CatalogPage;

import Footer from "../components/Footer";
import Header from "../components/Header";
import ListOptions from "../components/ListOptions";
import CatalogList from "../components/CatalogList";

const CatalogPage = () => (
  <>
    <Header pageType="catalog" />
    <ListOptions />
    <CatalogList />
    <Footer />
  </>
);

export default CatalogPage;

import Footer from "./Footer";
import Header from "./Header";
import ListOptions from "./ListOptions";
import ThreadsList from "./ThreadsList";

const ThreadsCatalog = () => {
  return (
    <>
      <Header pageType="catalog" />
      <ListOptions />
      <ThreadsList />
      <Footer />
    </>
  );
};

export default ThreadsCatalog;

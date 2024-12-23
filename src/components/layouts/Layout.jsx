import PropTypes from "prop-types";
import Navbar from "./sidebar/Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Navbar />
      <div className="flex-1">
        <main className="flex flex-col w-full p-4 bg-gradient-to-r from-blue-50 to-blue-200 relative overflow-x-hidden min-h-screen">
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import Navbar from '../Navbar';
import Footer from '../Footer';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default DefaultLayout;

import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface Props {
    children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;

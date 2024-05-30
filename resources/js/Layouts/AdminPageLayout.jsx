import Footer from "@/Components/Fragments/Footer";
import Navbar from "@/Components/Fragments/Navbar";
import React from "react";

const AdminPageLayout = ({ children }) => {
    return (
        <div className="bg-gray-100">
            <header>{/* <Navbar /> */}hola</header>
            <main>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
            {/* <footer>
                <Footer />
            </footer> */}
        </div>
    );
};

export default AdminPageLayout;

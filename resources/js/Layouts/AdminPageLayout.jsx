import Footer from "@/Components/Fragments/Footer";
import NavbarAdmin from "@/Components/Fragments/NavbarAdminDash/Navbar";
import React from "react";

const AdminPageLayout = ({ children }) => {
    return (
        <>
            <header>
                <NavbarAdmin />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default AdminPageLayout;

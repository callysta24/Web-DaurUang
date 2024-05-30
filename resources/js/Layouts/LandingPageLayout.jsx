import FooterLanding from "@/Components/Fragments/FooterLandingPage/Footer";
import Navbar from "@/Components/Fragments/Navbar/Navbar";
import React from "react";

const LandingPageLayout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>

            <footer>
                <FooterLanding />
            </footer>
        </>
    );
};

export default LandingPageLayout;

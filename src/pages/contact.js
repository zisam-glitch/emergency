import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import GoogleMapContainer from "../containers/global/map/index.jsx";
import ContactPageContainer from "../containers/contact/index.jsx";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – Contact" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <GoogleMapContainer classOption="contact-map-area" />
                        <ContactPageContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;

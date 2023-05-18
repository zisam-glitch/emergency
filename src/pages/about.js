import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header/index.jsx";
import PageTitleContainer from "../containers/global/page-title/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import AboutContainer from "../containers/about/index.jsx";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – About" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <PageTitleContainer
                            image="img/photos/about-bg1.jpg"
                            subTitle="Hope medical center"
                            title="About <span>Hope</span>"
                        />
                        <AboutContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;

import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header/index.jsx";
import IntroContainer from "../containers/home/intro/index.jsx";
import HealthFeatureContainer from "../containers/home/health-feature/index.jsx";
import MedicalFeatureContainer from "../containers/home/medical-feature/index.jsx";
import AppointmentContainer from "../containers/home/appointment/index.jsx";
import TeamContainer from "../containers/home/team/index.jsx";
import TestimonialContainer from "../containers/home/testimonial/index.jsx";
import BrandContainer from "../containers/global/brand/index.jsx";
import PricingContainer from "../containers/global/pricing/index.jsx";
import BlogAccordion from "../containers/home/blog-accordion/index.jsx";
import GoogleMapContainer from "../containers/global/map/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – Health &amp; Medical React JS Template" />
                <div className="wrapper home-default-wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <IntroContainer />
                        <HealthFeatureContainer />
                        <MedicalFeatureContainer />
                        <AppointmentContainer />
                        <TeamContainer />
                        <TestimonialContainer />
                        <BrandContainer />
                        <PricingContainer />
                        <BlogAccordion />
                        <GoogleMapContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;

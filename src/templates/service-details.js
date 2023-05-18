import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import Breadcrumb from "../containers/global/breadcrumb/index.jsx";
import ServiceDetailsContainer from "../containers/service-details/index.jsx";
import ServiceData from "../data/service.json";
import PropTypes from "prop-types";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";

const ServiceDetails = ({
    match: {
        params: { id },
    },
}) => {
    const serviceId = parseInt(id, 10);
    const data = ServiceData.filter((service) => service.id === serviceId);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – Service Details" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            prevs={[
                                { text: "Home", path: "/" },
                                { text: "Service", path: "/service" },
                            ]}
                            contentThree={data[0]?.title}
                        />
                        <ServiceDetailsContainer data={data[0]} />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

ServiceDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default ServiceDetails;

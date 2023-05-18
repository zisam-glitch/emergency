import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header/index.jsx";
import Breadcrumb from "../containers/global/breadcrumb/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import BlogListContainer from "../containers/blog/blog-list/index.jsx";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";

const BlogPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – Blog" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            classOptionOne="content-style3"
                            classOptionTwo="bread-crumbs-style2"
                            prevs={[{ text: "Home", path: "/" }]}
                            contentThree="Blog"
                            title="<span>Latest From</span> Our Blog"
                        />
                        <BlogListContainer />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;

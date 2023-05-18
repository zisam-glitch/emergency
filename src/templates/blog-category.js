import PropTypes from "prop-types";
import React from "react";
import Layout from "../layouts/index.jsx";
import Header from "../layouts/header/index.jsx";
import Breadcrumb from "../containers/global/breadcrumb/index.jsx";
import Footer from "../layouts/footer/index.jsx";
import BlogData from "../data/blog.json";
import { slugify } from "../utils/index.js";
import BlogItemContainer from "../containers/blog/blog-item/index.jsx";
import ScrollToTop from "../components/scroll-to-top/index.jsx";
import SEO from "../components/seo/index.jsx";

const BlogCategory = ({
    match: {
        params: { slug },
    },
}) => {
    const data = BlogData.map((blog) => {
        return {
            ...blog,
            categories: blog.categories.filter((cat) => slugify(cat) === slug),
        };
    }).filter((blog) => blog.categories.length > 0);
    const categoryTitle = data[0].categories[0];
    return (
        <React.Fragment>
            <Layout>
                <div className="wrapper">
                    <Header />
                    <SEO title="Hope – Blog Category" />
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            prevs={[
                                { text: "Home", path: "/" },
                                { text: "Blog", path: "/blog" },
                            ]}
                            contentThree={categoryTitle}
                        />
                        <BlogItemContainer data={data} />
                    </div>
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogCategory.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default BlogCategory;

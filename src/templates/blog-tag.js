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

const BlogTag = ({
    match: {
        params: { slug },
    },
}) => {
    const data = BlogData.map((blog) => {
        return {
            ...blog,
            tags: blog.tags.filter((tag) => slugify(tag) === slug),
        };
    }).filter((blog) => blog.tags.length > 0);
    const tagTitle = data[0].tags[0];
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Hope – Blog Tag" />
                <div className="wrapper">
                    <Header />
                    <div className="main-content site-wrapper-reveal">
                        <Breadcrumb
                            prevs={[
                                { text: "Home", path: "/" },
                                { text: "Blog", path: "/blog" },
                            ]}
                            contentThree={tagTitle}
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

BlogTag.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default BlogTag;

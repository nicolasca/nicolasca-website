import React from "react";
import Layout from "../components/layout/layout";
import { useIntl } from "gatsby-plugin-intl";
import Seo from "../components/seo";
import "../styles/pages/photos.scss";


const PhotosPage = () => {
    const intl = useIntl();
    return(
        <Layout>
            <Seo title={intl.formatMessage({ id: "Photos" })} />
                <div className="Photos">
                    Photos
                </div>
        </Layout>
    );
};

export default PhotosPage;
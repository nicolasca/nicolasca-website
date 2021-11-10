import React from "react";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import Seo from "../components/seo";
import "../styles/pages/travel.scss";


const TravelPage = () => {
    const intl = useIntl();
    return(
        <Layout>
            <Seo title={intl.formatMessage({ id: "Travel" })} />
                <div className="Travel">
                    <StaticImage src="../images/travel/japan.jpeg" />
                    <FormattedMessage id={"Japan"} />
                </div>
        </Layout>
    );
};

export default TravelPage;
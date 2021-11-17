import * as React from 'react'
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>abimin blogu icin calisiyoz...</p>
            <StaticImage src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" alt="test image"/>
        </Layout>
    )
}

export default IndexPage
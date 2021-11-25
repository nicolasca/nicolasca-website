import React from "react"
import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import styled from "styled-components"

const Main = styled.div`
  width: 100%;
  height: 100%;
`

const JapanPage = () => {
  const intl = useIntl()

  return (
    <Layout backgroundColor="#edeee8">
      <Seo title={intl.formatMessage({ id: "Travel" })} />
      <Main></Main>
    </Layout>
  )
}

export default JapanPage

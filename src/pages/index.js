import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import HomePage from "./Home"
import Seo from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <>
      <Seo title={intl.formatMessage({ id: "Home" })} />
      <HomePage></HomePage>
    </>
  )
}

export default IndexPage

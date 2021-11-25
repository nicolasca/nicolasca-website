import React, { useEffect } from "react"
import useBlobity from "blobity/lib/useBlobity"
import { useIntl, FormattedMessage, Link } from "gatsby-plugin-intl"
import styled from "styled-components"
import Seo from "../../components/seo"
import Layout from "../../components/layout/layout"

const Main = styled.div`
  width: 100%;
  height: 100%;
`

export const initiaBlobityOptions = {
  licenseKey: "gmrchk",
  focusableElementsOffsetX: 5,
  focusableElementsOffsetY: 5,
  color: "#c90000",
  dotColor: "black",
  invert: false,
  focusableElements:
    "[data-blobity], a:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
  font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  fontSize: 14,
  fontWeight: 400,
  opacity: 0.7,
  fontColor: "#ffffff",
  zIndex: 1,
  size: 40,
  radius: 4,
}

const JapanPage = () => {
  const intl = useIntl()

  const blobityInstance = useBlobity(initiaBlobityOptions)

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      //   window.blobity = blobityInstance.current
    }

    return () => {
      //   window.blobity = null
      blobityInstance.current.destroy()
    }
  }, [blobityInstance])

  return (
    <Layout backgroundColor="#edeee8">
      <Seo title={intl.formatMessage({ id: "Travel" })} />
      <Main></Main>
    </Layout>
  )
}

export default JapanPage

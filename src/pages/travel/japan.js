import React, { useEffect, useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Seo from "../../components/seo"
import { BlobityContext } from "../../utils/blobity.context"

const Main = styled.div`
  width: 100%;
  height: 100%;
`

const JapanPage = () => {
  const intl = useIntl()

  const blobityContext = useContext(BlobityContext)
  const blobityInstance = blobityContext.data.blobityInstance

  useEffect(() => {
    if (!blobityContext.data || !blobityContext.data.blobityInstance) return

    blobityInstance.updateOptions({
      size: 50,
      color: "#c90000",
      dotColor: "#ffffff",
    })
    blobityContext.set({ blobityInstance: blobityInstance })

    return () => {
      blobityInstance.updateOptions({
        size: 10,
        color: "#22A7F0",
        dotColor: "#000000",
      })
      blobityContext.set({ blobityInstance: blobityInstance })
    }
  }, [blobityContext.data.blobityInstance, blobityContext.set])

  return (
    <>
      <Seo title={intl.formatMessage({ id: "Travel" })} />
      <Main>
        <h1>Travel into the East</h1>
      </Main>
    </>
  )
}

export default JapanPage

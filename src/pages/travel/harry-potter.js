import React, { useEffect, useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Seo from "../../components/seo"
import { BlobityContext } from "../../utils/blobity.context"
import HogwartsExpress from "../../components/hogwarts-express/hogwarts-express"

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TicketTrain = styled.div``

const HarryPotterPage = () => {
  const intl = useIntl()

  const blobityContext = useContext(BlobityContext)
  const blobityInstance = blobityContext.data.blobityInstance

  useEffect(() => {
    if (!blobityContext.data || !blobityContext.data.blobityInstance) return
    console.log("data", blobityContext.data)
    blobityInstance.updateOptions({
      size: 50,
      invert: true,
    })
    blobityContext.set({ blobityInstance: blobityInstance })
    blobityContext.set({
      theme: {
        backgroudColor: "black",
        fontColor: "white",
      },
    })

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
        <h1>Un univers de magie</h1>
        <TicketTrain>
          <HogwartsExpress />
        </TicketTrain>
      </Main>
    </>
  )
}

export default HarryPotterPage

import React, { useEffect, useContext } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Seo from "../../components/seo"
import { BlobityContext } from "../../utils/blobity.context"
import HogwartsExpress from "../../components/hogwarts-express/hogwarts-express"
import { defaultTheme, harryPotterTheme } from "../../styles/Theme"

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

    blobityInstance.updateOptions({
      size: 50,
      invert: true
    })
    blobityContext.set({ blobityInstance: blobityInstance })
    blobityContext.set({
      theme: {
        backgroudColor: "black",
        fontColor: "white"
      }
    })

    const documentSelector = document.querySelector("html")
    documentSelector.style.setProperty(
      "--backgroundColor",
      harryPotterTheme.backgroundColor
    )
    documentSelector.style.setProperty(
      "--textColor",
      harryPotterTheme.textColor
    )

    return () => {
      blobityInstance.updateOptions({
        size: 10,
        color: "#22A7F0",
        dotColor: "#000000",
        invert: false
      })
      blobityContext.set({ blobityInstance: blobityInstance })
      documentSelector.style.setProperty(
        "--backgroundColor",
        defaultTheme.backgroundColor
      )
      documentSelector.style.setProperty("--textColor", defaultTheme.textColor)
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

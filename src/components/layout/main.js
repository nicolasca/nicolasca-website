import React, { useEffect, useContext } from "react"
import PropTypes from "prop-types"
import useBlobity from "blobity/lib/useBlobity"
import { BlobityContext } from "../../utils/blobity.context"

export const initiaBlobityOptions = {
  licenseKey: "gmrchk",
  focusableElementsOffsetX: 5,
  focusableElementsOffsetY: 5,
  color: "#22A7F0",
  dotColor: "black",
  invert: false,
  focusableElements: "[data-blobity]",
  font: "'Montserrat','Source Sans Pro',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif",
  fontSize: 14,
  fontWeight: 400,
  opacity: 0.7,
  fontColor: "#ffffff",
  zIndex: 1,
  size: 10,
  radius: 4,
}

const Main = ({ children }) => {
  const blobityInstance = useBlobity(initiaBlobityOptions)
  const blobityContext = useContext(BlobityContext)

  useEffect(() => {
    const blobityInstanceCurrent = blobityInstance.current
    if (blobityInstanceCurrent) {
      blobityContext.set({ blobityInstance: blobityInstanceCurrent })
    }
    return () => {
      blobityInstanceCurrent.destroy()
    }
  }, [blobityInstance, blobityContext.set])

  return <main id="page-wrap">{children}</main>
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main

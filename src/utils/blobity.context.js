// Context.js
import React from "react"

const defaultContextValue = {
  data: {
    // set your initial data shape here
    blobityInstance: null,
    theme: {
      backgroundColor: "white",
      fontColor: "black",
    },
  },
  set: () => {},
}

const BlobityContext = React.createContext(defaultContextValue)
const { Provider, Consumer } = BlobityContext

class ContextProviderComponent extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    }
  }

  setData(newData) {
    console.log(newData)
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }))
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as default, ContextProviderComponent, BlobityContext }

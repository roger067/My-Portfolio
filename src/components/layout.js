import React from "react"

import Header from "./header"
import Content from "./contentCard"
import "./layout.scss"
import "./style.scss"

const Layout = ({ children }) => {
  return (
    <section className="container">
      <Header />
      <Content>{children}</Content>
    </section>
  )
}

export default Layout

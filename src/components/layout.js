import React from "react"

import Header from "./header"
import "./layout.scss"
import "./style.scss"

const Layout = ({ children }) => {
  console.log(children)
  return (
    <section className="container">
      <Header />
      <div className="content-card">
        {children}
      </div>
    </section>
  )
}

export default Layout

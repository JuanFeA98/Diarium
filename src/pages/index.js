import * as React from "react"
import HomeCard from "../components/HomeCard"
import Layout from "../components/Layout"

import '../styles/index.css'

const IndexPage = () => {
  return (
    <main>
      <Layout>
          <div className="wellcome-message">
            <p>
              Wellcome!
            </p>
          </div>
          <HomeCard></HomeCard>
      </Layout>
    </main>
  )
}

export default IndexPage
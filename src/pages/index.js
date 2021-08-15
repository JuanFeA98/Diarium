import * as React from "react"
import { Link } from 'gatsby'

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
          <Link to='/NewList'>
            <HomeCard name='New List' page='/NewList'></HomeCard>
          </Link>
          <HomeCard name='My Lists'></HomeCard>
          <HomeCard name='Settings'></HomeCard>
      </Layout>
    </main>
  )
}

export default IndexPage
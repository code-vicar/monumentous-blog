import React from 'react'
import { graphql } from 'gatsby'
import Section from '../components/section'
import Layout from '../components/layout'
import About from '../components/about'
import Contact from '../components/contact'
import SEO from '../components/seo'
import LatestNote from '../components/latest_note'

class SiteIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
      >
        <SEO title="Home" />
        <Section>
          <About id="about" />
        </Section>
        <Section>
          <LatestNote id="notes" />
        </Section>
        <Section>
          <Contact id="contact" />
        </Section>
      </Layout>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query homeQuery {
    site {
      siteMetadata {
        title
      }
    } 
  }
`

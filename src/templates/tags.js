import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const PageTitle = styled.h1`
  padding-bottom: 10px;
`
const tagArray = ['Wakefield','FMDigi']

class Tags extends React.Component {
  render() {
    const pageTitle = `#${this.props.pageContext.tag}`
    const posts = this.props.data.posts.edges

    if (tagArray.includes(this.props.pageContext.tag)) {
      return (
        <Layout location={this.props.location}>
          <SEO title={`Top blog posts on ${this.props.pageContext.tag}`} />
          <Hero title={pageTitle} />
  
          <Wrapper>
            <PageTitle>{this.props.pageContext.tag} Posts</PageTitle>
            <PostsList posts={posts} />
          </Wrapper>
        </Layout>
      )
    } else {
      return (
        <Layout location={this.props.location}>
          <SEO title={`Top blog posts on ${this.props.pageContext.tag}`} />
          <Hero title={pageTitle} />
  
          <Wrapper>
            <PageTitle>Posts tagged as {this.props.pageContext.tag}</PageTitle>
            <PostsList posts={posts} />
          </Wrapper>
        </Layout>
      )
    }
  }
}

export default Tags

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tags: { eq: $tag }
          published: { ne: false }
          unlisted: { ne: true }
        }
      }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            language
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

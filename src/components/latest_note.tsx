import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Text } from 'mineral-ui'

interface Props {
  id: string
}

export const LatestNote: React.FC<Props> = ({ id }) => {
  const data = useStaticQuery(graphql`
    query LatestNoteQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1
      ) {
        edges {
          node {
            excerpt(format: HTML)
            snippet
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMM YYYY")
              title
              description
            }
          }
        }
      }
    }
  `)
  const notes = data.allMarkdownRemark.edges
  if (!notes) {
    return null
  }
  const note = notes[0].node
  return (
    <>
      <div
        id={id}
        className="offset-anchor"
      />
      <Text fontWeight="extraBold">Latest Note</Text>
      <Text>
        {note.frontmatter.date}{' '}
        <Link
          to={note.fields.slug}
        >
          {note.frontmatter.title}
        </Link>
      </Text>
      <div
        style={{
          maxWidth: '600px'
        }}
        dangerouslySetInnerHTML={{
          __html: note.snippet,
        }}
      />
    </>
  )
}
const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulHotel(limit: 1000) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `
    )
    .then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      const hotelTemplate = path.resolve(`./src/templates/hotel.js`)
      _.each(result.data.allContentfulHotel.edges, edge => {
        createPage({
          path: `/hotels/${edge.node.slug}/`,
          component: slash(hotelTemplate),
          context: {
            id: edge.node.id,
            slug: edge.node.slug
          },
        })
      })
      resolve()
    })
  })
}

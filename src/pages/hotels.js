import React, { Component } from 'react';
import Link from 'gatsby-link'

const Hotel = (props) => (
  <div className="hotel-mini">
    <Link to={`/hotels/${props.slug}`} style={{ color: '#484848'}}>
      <div className="hotel-image" style={{
        backgroundImage: props.img
      }}></div>
      <h4>{props.title}</h4>
      <div>{props.description}</div>
    </Link>
  </div>
)

class ResultsPage extends Component {
  render() {
    var hotels = this.props.data.allContentfulHotel.edges;
    return (
      <div className="transition-item ">
        <div className="section results">
          <div className="w-container">
            <h1>Search results:</h1>
            <div className="flex-box">
              { hotels.map( item => {
                return <Hotel
                  slug={item.node.slug}
                  img={item.node.image}
                  title={item.node.title}
                  description={item.node.description.description}
                  key={item.node.slug}
                       />
              } ) }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ResultsPage;

export const pageQuery = graphql `
  query allHotelsQuery {
      allContentfulHotel {
        edges {
          node {
            id
            slug
            description {
              id
              description
            }
            title
            image {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
      }

  }
`

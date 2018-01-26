import React, { Component } from 'react';
import Link from 'gatsby-link'
import marked from 'marked'

class HotelTemplate extends Component {

  render() {
    const hotel = this.props.data.contentfulHotel
    const {
      title,
      description: {description},
      slug,
      content: {content},
    } = hotel
    const url = hotel.image && hotel.image.file.url
    return (
      <div className="transition-item">
        <div className="section hotel-page" style={{ backgroundImage: `url(${url || ''})` }}>
          <div className="w-container">
            <div className="box mini">
              <Link to="/hotels/">Go back</Link>
            </div>
            <div className="box form">
              <h1>{title}</h1>
              <p>{description}</p>
              <div className="box-top-padding-20">
                <Link to="#" className="submit-button w-button">Book a number</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section hoteldescription">
          <div className="w-container">
            <div className="box" dangerouslySetInnerHTML={{__html: marked(content)}}>
            </div>
          </div>
        </div>
      </div>
      )
  }

}

export default HotelTemplate

export const pageQuery = graphql`
  query hotelQuery($id: String!) {
    contentfulHotel(id: { eq: $id }) {
      id
      slug
      description {
        description
      }
      title
      content {
        content
      }
      image {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`

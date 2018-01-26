import React, { Component } from 'react';
import Link from 'gatsby-link'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class IndexPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
     this.setState({
       startDate: date
     });
  }

  handleChangeEnd(date) {
     this.setState({
       endDate: date
     });
  }

  render() {


    return (
      <div className="transition-item">
        <main className="section hero">
          <div className="w-container">
            <div className="box form">
              <h1>Find hotel rooms with us</h1>
              <p>Find rooms that are suitable for any trip in Kuching, Sarawak, Malaysia.</p>
              <div className="w-form">
                <form>
                  <label htmlFor="name" className="field-label">Persons</label>
                  <input type="text" className="text-field w-input" maxLength="256" name="name" data-name="Name" placeholder="Enter your name" id="name"/>
                  <label htmlFor="name-2" className="field-label">Hotel rooms</label>
                  <input type="text" className="text-field w-input" maxLength="256" name="name-2" data-name="Name 2" placeholder="Enter your name" id="name-2"/>
                  <div style={{ display: 'inline-block'}}>
                    <label htmlFor="name-3" className="field-label">From</label>
                    <DatePicker
                      className="text-feild w-input"
                      selected={this.state.startDate}
                      onChange={this.handleChangeStart}
                    />
                  </div>
                  <div style={{ display: 'inline-block', float: 'right'}}>
                    <label htmlFor="name-3" className="field-label">To</label>
                    <DatePicker
                      className="text-feild w-input"
                      selected={this.state.startDate}
                      onChange={this.handleChangeEnd}
                    />
                  </div>

                  <div className="box-top-padding-20">
                    <Link to="results" value="Search" className="submit-button w-button">Search</Link>
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

}

export default IndexPage;

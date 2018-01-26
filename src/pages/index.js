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
                  <label htmlFor="adults" className="field-label">Adults</label>
                  <input type="number" className="text-field w-input" maxLength="256" name="adults" placeholder="Enter number of adults"/>
                  <label htmlFor="childrens" className="field-label">Childrens</label>
                  <input type="number" className="text-field w-input" maxLength="256" name="childrens" placeholder="Enter number of childrens"/>
                  <label htmlFor="rooms" className="field-label">No. of rooms</label>
                  <input type="number" className="text-field w-input" maxLength="256" name="rooms" placeholder="Enter number of rooms"/>
                  <div className="div-for-cal">
                    <div className="div-for-input">
                      <label className="field-label">From</label>
                      <DatePicker
                        className="text-feild w-input"
                        selected={this.state.startDate}
                        onChange={this.handleChangeStart}
                      />
                    </div>
                    <div className="div-for-input">
                      <label className="field-label">To</label>
                      <DatePicker
                        className="text-feild w-input"
                        selected={this.state.startDate}
                        onChange={this.handleChangeEnd}
                      />
                    </div>
                  </div>


                  <div className="box-top-padding-20">
                    <Link to="/hotels/" value="Search" className="submit-button w-button">Search</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

}

export default IndexPage;

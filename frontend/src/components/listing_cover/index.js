import './index.css'
// import cover from "../../assets/images/listing_bg.png"
import cover from '../../assets/images/listing_bg1.png'
import search from '../../assets/images/search.png'
import search2 from '../../assets/images/w_search.png'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import gps from '../../assets/images/gps.png'
import Dropdown from 'react-bootstrap/Dropdown'
import img1 from '../../assets/images/card.png'
import ListingCard from '../listing_card'
import { Typeahead } from 'react-bootstrap-typeahead' // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { useState } from 'react'

export default function ListingCover() {
  const [singleSelections, setSingleSelections] = useState([])
  const [city, setCity] = useState('Silicon Valley')
  const [cityArr, setCityArr] = useState([
    'Silicon Valley',
    'Los Angeles',
    'Toronto',
  ])
  const onChange = (event, child) => {
    setCity(event.target.value)
  }

  return (
    <div className="listing_container">
      <div className="sub_listing_container">
        <div className="listing_bg_image">
          {/* <img src={cover} alt="" /> */}
        </div>

        <div className="listing_content">
          <div className="listing_content_sub">
            <h3>Flexible Ownership Opportunities</h3>
            <h1>Multi-home Properties in Urban Markets</h1>
            <div className="search_row_wrapper">
              <Dropdown className="location_dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {city}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <input
                      type="checkbox"
                      checked={
                        city.toLocaleLowerCase() ===
                        'Silicon Valley'.toLocaleLowerCase()
                          ? true
                          : false
                      }
                      value={'Silicon Valley'}
                      onChange={onChange}
                      name="group"
                      className="form-check-input"
                    />
                    Silicon Valley
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input
                      type="checkbox"
                      checked={
                        city.toLocaleLowerCase() ===
                        'Los Angeles'.toLocaleLowerCase()
                          ? true
                          : false
                      }
                      value={'Los Angeles'}
                      onChange={onChange}
                      name="group"
                      className="form-check-input"
                    />
                    Los Angeles
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <input
                      type="checkbox"
                      checked={
                        city.toLocaleLowerCase() ===
                        'Toronto'.toLocaleLowerCase()
                          ? true
                          : false
                      }
                      value={'Toronto'}
                      onChange={onChange}
                      name="group"
                      className="form-check-input"
                    />
                    Toronto
                  </Dropdown.Item>
                  {/* ))} */}
                </Dropdown.Menu>
              </Dropdown>

              <div className="input_box">
                <img src={search} alt="" />
                {/* <input type="text" name="search" placeholder="Search for locality, properties" id="search" /> */}
                <Typeahead
                  id="basic-typeahead-single"
                  labelKey="name"
                  onChange={setSingleSelections}
                  options={['Silicon Valley', 'Los Angeles ', 'Toronto']}
                  placeholder="Search for locality, properties"
                  selected={singleSelections}
                  className="search_input"
                />
              </div>
              <div className="lasts_buttons">
                <div className="gps_btn_wrapper">
                  <button className="gps_btn">
                    {' '}
                    <img src={gps} alt="" />
                    <span>Near me</span>
                  </button>
                </div>
                <div className="search_btn_wrapper">
                  <button className="search_btn">
                    <img src={search2} alt="" />
                    <span>Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card_container theme_container">
        <div className="card_heading">
          <div>
            <h1>Featured Properties</h1>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
        <ListingCard city={city} />
        <div className="card_button">
          <button>Load More</button>
        </div>
      </div>
    </div>
  )
}

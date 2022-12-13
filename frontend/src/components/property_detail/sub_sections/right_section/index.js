import './index.css'
import Dropdown from 'react-bootstrap/Dropdown'
import img from '../../../../assets/images/pd.png'
import map from '../../../../assets/images/map.png'
import DetailModal from '../../../all_modals/detail_modal'
import ExpensesModal from '../../../all_modals/expenses_modal'
import GainModal from '../../../all_modals/gain_modal'
import InstallmentModal from '../../../all_modals/installment_modal'
import { useEffect, useState } from 'react'

export default function RightPd(props) {
  const [price, setPrice] = useState('')
  const [ownerShip, setOwnerShip] = useState('4')
  const [ownerShipPercent, setOwnerShipPercent] = useState('5')
  const [ownerShipPercentPrice, setOwnerShipPercentPrice] = useState('')

  useEffect(() => {
    setPrice(props.price / parseInt(ownerShip))
    props.setOwnerShipProps(parseInt(ownerShip))
    props.setOwnerShipPrice(parseInt(props.price / parseInt(ownerShip)))
  }, [props.price, ownerShip])

  useEffect(() => {
    setOwnerShipPercentPrice((price / 100) * parseInt(ownerShipPercent))
  }, [price])

  const onchange = (value) => {
    setOwnerShip(value)
  }

  const onchange1 = (value) => {
    setOwnerShipPercent(value)
    setOwnerShipPercentPrice((price / 100) * parseInt(value))
  }

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)

  return (
    <>
      <div className="overview_column">
        <p>Estimate the monthly cost to own</p>
      </div>
      <div className="right_pd_cnt">
        <h3>ownership</h3>
        <div className="dropdown_row">
          <div className="dropdown_1">
            <Dropdown className="fraction_dd">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                1/{parseInt(ownerShip)}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => onchange('4')}>
                  1/4
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => onchange('3')}>
                  1/3
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => onchange('2')}>
                  1/2
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="fraction_dd_content">
              <h5>{numberFormat(price)} </h5> <DetailModal />
            </div>
          </div>
          <div className="dropdown_1">
            <Dropdown className="percentage_dd">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {parseInt(ownerShipPercent)}%
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => onchange1('5')}>
                  5%
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => onchange1('10')}>
                  10%
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => onchange1('15')}>
                  15%
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => onchange1('20')}>
                  20%
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h5>{numberFormat(ownerShipPercentPrice)}</h5>
          </div>
        </div>
        <div className="left_last_cnt">
          <div className="left_last_row">
            <div className="modal_img_wrapper">
              <span>Financing</span>
              <InstallmentModal />
            </div>
            <div>
              <p>$1,890/mo.</p>
            </div>
          </div>
          <div className="left_last_row">
            <div className="modal_img_wrapper">
              <span>Home expenses</span>
              <ExpensesModal />
            </div>
            <div>
              <p>$542/mo.</p>
            </div>
          </div>
        </div>
        <div className="last_pd_text">
          <h1>
            $2,433/<span> month </span>
          </h1>
        </div>
      </div>
      <h1 className="right_main_heading">Estimate your equity gain</h1>

      <div className="bottom_dd_wrapper">
        <div className="dropdown_1">
          <Dropdown className="equity_dd">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              At Closing
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>At Closing</Dropdown.Item>
              <Dropdown.Item>1 Year</Dropdown.Item>
              <Dropdown.Item>5 Year</Dropdown.Item>
              <Dropdown.Item>10 Year</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h5> $153,137 </h5>
          <div className="home_ex_para">
            <span>Home expenses</span>
            <GainModal />{' '}
          </div>
        </div>
      </div>
      <h1 className="right_main_heading">View property on map</h1>
      <div className="map_container">
        <img src={map} alt="" />
      </div>
    </>
  )
}

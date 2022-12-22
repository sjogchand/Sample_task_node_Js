import './index.css'
import Dropdown from 'react-bootstrap/Dropdown'
import img from '../../../../assets/images/pd.png'
import map from '../../../../assets/images/map.png'
import DetailModal from '../../../all_modals/detail_modal'
import ExpensesModal from '../../../all_modals/expenses_modal'
import GainModal from '../../../all_modals/gain_modal'
import InstallmentModal from '../../../all_modals/installment_modal'
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function RightPd(props) {
  const [price, setPrice] = useState('')
  const [ownerShip, setOwnerShip] = useState('4')
  const [ownerShipPercent, setOwnerShipPercent] = useState('5')
  const [ownerShipPercentPrice, setOwnerShipPercentPrice] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [monthlyEmi, setMonthlyEmi] = useState('')
  const [homeExpenses, setHomeExpenses] = useState('')
  const [closingYear, setClosingYear] = useState('0')
  const [newPropertyPriceArr, setNewPropertyPriceArr] = useState([])
  const [newPropertyPrice, setNewPropertyPrice] = useState([])
  const [percentage, setPercentage] = useState(4)

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)

  const onchange = (value) => {
    setOwnerShip(value)
  }

  const onchange1 = (value) => {
    setOwnerShipPercent(value)
  }

  const onchange2 = (value) => {
    setClosingYear(value)
  }

  useEffect(() => {
    let price = props.propertyDetails.wholePrice / parseInt(ownerShip)
    setPrice(price)
    props.setOwnerShipProps(parseInt(ownerShip))
    props.setOwnerShipPrice(
      parseInt(props.propertyDetails.wholePrice / parseInt(ownerShip)),
    )
    setLoanAmount(
      props.propertyDetails.wholePrice -
        (props.propertyDetails.wholePrice / 100) * ownerShipPercent,
    )
    setOwnerShipPercentPrice((price / 100) * parseInt(ownerShipPercent))
  }, [props.propertyDetails, ownerShip, ownerShipPercent])

  useEffect(() => {
    var P = loanAmount //principle / initial amount borrowed
    var I = percentage / 100 / 12 //monthly interest rate
    var N = 30 * 12 //number of payments months

    var emi = (P * I * Math.pow(1 + I, N)) / (Math.pow(1 + I, N) - 1)
    var realStateTax = (loanAmount * 0.015) / 12
    var MhprogramFee = 104 * ownerShip

    setMonthlyEmi(emi / ownerShip)
    setHomeExpenses((realStateTax + MhprogramFee) / ownerShip)
  }, [loanAmount, ownerShip, percentage])

  useEffect(() => {
    if (
      props.propertyDetails.newEstimatedValue !== '' &&
      props.propertyDetails.newEstimatedValue !== NaN
    ) {
      let equityIncrease =
        parseInt(props.propertyDetails.newEstimatedValue) -
        parseInt(props.propertyDetails.wholePrice)

      let totalEquity =
        equityIncrease +
        (props.propertyDetails.wholePrice / 100) * parseInt(ownerShipPercent)

      var newPrice = parseInt(props.propertyDetails.newEstimatedValue)
      let t1 =
        (totalEquity + (newPrice - props.propertyDetails.newEstimatedValue)) /
        parseInt(ownerShip)

      setNewPropertyPrice(parseInt(t1 !== NaN ? t1 : 0))

      var data = []
      for (let i = 0; i <= 10; i++) {
        i > 0
          ? data.push(Math.ceil(data[i - 1] + (data[i - 1] / 100) * 3))
          : data.push(newPrice)
      }
      setNewPropertyPriceArr(data)
    }
  }, [props.propertyDetails, price])

  useEffect(() => {
    if (
      props.propertyDetails.newEstimatedValue !== '' &&
      props.propertyDetails.newEstimatedValue !== NaN
    ) {
      let newClosingPrice = ''
      let equityIncrease =
        parseInt(props.propertyDetails.newEstimatedValue) -
        parseInt(props.propertyDetails.wholePrice)

      let totalEquity =
        equityIncrease +
        (props.propertyDetails.wholePrice / 100) * parseInt(ownerShipPercent)

      if (closingYear === 0) newClosingPrice = newPropertyPriceArr[0]
      else
        newClosingPrice = newPropertyPriceArr.filter(
          (a, index) => parseInt(index) === parseInt(closingYear),
        )

      let t1 =
        (totalEquity +
          (newClosingPrice[0] - props.propertyDetails.newEstimatedValue)) /
        parseInt(ownerShip)
      setNewPropertyPrice(parseInt(t1))
    }
  }, [closingYear, ownerShipPercent, ownerShip])

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
        <Box sx={{ pt: '40px' }}>
          <span>INTEREST RATE</span>
          <Stack spacing={2} direction="row">
            <Slider
              defaultValue={4}
              step={0.1}
              aria-label="Default"
              valueLabelDisplay="auto"
              value={percentage}
              onChange={(e) => {
                setPercentage(e.target.value)
              }}
            />
            <Button
              variant="contained"
              onClick={(e) => {
                setPercentage(
                  parseFloat(parseFloat(percentage) - 0.1).toFixed(1),
                )
              }}
            >
              -
            </Button>
            <Button
              variant="contained"
              onClick={(e) => {
                setPercentage(
                  parseFloat(parseFloat(percentage) + 0.1).toFixed(1),
                )
              }}
            >
              +
            </Button>
          </Stack>
          {percentage}%
        </Box>
        <div className="left_last_cnt">
          <div className="left_last_row">
            <div className="modal_img_wrapper">
              <span>Financing</span>
              <InstallmentModal />
            </div>
            <div>
              <p>{numberFormat(monthlyEmi)}/mo.</p>
            </div>
          </div>
          <div className="left_last_row">
            <div className="modal_img_wrapper">
              <span>Home expenses</span>
              <ExpensesModal homeExpenses={homeExpenses} />
            </div>
            <div>
              <p>{numberFormat(homeExpenses)}/mo.</p>
            </div>
          </div>
        </div>
        <div className="last_pd_text">
          <h1>
            {numberFormat(monthlyEmi + homeExpenses)}/<span> month </span>
          </h1>
        </div>
      </div>
      <h1 className="right_main_heading">Estimate your equity gain</h1>

      <div className="bottom_dd_wrapper">
        <div className="dropdown_1">
          <Dropdown className="equity_dd">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {closingYear > 0 ? parseInt(closingYear) : 'At Closing'}{' '}
              {closingYear > 0 ? 'Year' : ''}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={(e) => onchange2('0')}>
                At Closing
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => onchange2('1')}>
                1 Year
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => onchange2('5')}>
                5 Year
              </Dropdown.Item>
              <Dropdown.Item onClick={(e) => onchange2('10')}>
                10 Year
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <h5> {numberFormat(newPropertyPrice)} </h5>
          <div className="home_ex_para">
            <span>Home expenses</span>
            <GainModal />{' '}
          </div>
        </div>
      </div>
    </>
  )
}

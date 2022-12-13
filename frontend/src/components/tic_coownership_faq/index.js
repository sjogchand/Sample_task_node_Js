import './index.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useAccordionButton, AccordionContext } from 'react-bootstrap';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Theme_Buttom from '../general_components/button';
import img from '../../assets/images/plus.png'


function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div className='faq_header' onClick={decoratedOnClick}>
            <h3>{children} </h3>
            <button className={isCurrentEventKey ? 'b_active' : ''}> <img src={img} alt="" /> </button>
        </div>

    );
}

function TIC_Faq() {
    return (
        <div id='faq' className="theme_container">
            <div id='faq' className="tic_faq_container">
                <div className='tic_faq_heading'>
                    <h1>Understanding TIC Co-ownership</h1>
                </div>
                <div>
                    <Accordion className='faq_wrapper' defaultActiveKey="">
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="0">What should be included in an TIC operating agreement?</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <li>Ownership percentages (how much each person owns of the TIC)</li>
                                        <li>Member voting powers</li>
                                        <li>Rules for meetings and notes</li>
                                        <li>How the TIC will be managed</li>
                                        <li>Profit and loss allocations</li>
                                        <li>Plans of action if a member leaves</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="12">How do you form a tenancy in common?</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="12">
                                <Card.Body>Milenium Haus takes care of deed ownership transfer to a group of co-owners. The “tenancy in common agreement” is created by Milenium Haus, to make the TIC formation fair and equitable to each co-owner.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="1">Can you finance a tenancy in common?</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Yes, you can finance a TIC. Each owner has an individual mortgage, just like if they were to buy their own property. Milenium Haus will help connect you with pre-approved lenders specializing in TIC financing.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="5">How do you transfer your shares in a tenancy in common?</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>Shares can be bought out by fellow tenants, sold to a new owner, repurchased by Milenium Haus, or willed to an heir.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="6">What happens if a tenant wants to sell?</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>Owners can sell or will their shares independently. Co-tenants or Milenium Haus can always opt to buy out any owner who wants to sell. If the share is not being sold to an existing tenant, a new buyer must be identified and vetted.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="7">How do you dissolve a tenancy in common?</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>Selling a property dissolves the tenancy in common. This happens if all the owners agree to sell and then split proceeds according to ownership interest percentages. If there’s a dispute over whether to sell, owner(s) representing a majority can file a partition action so that the investment can be liquidated to the tenants.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <ContextAwareToggle eventKey="8">How does ownership work for Milenium Haus?</ContextAwareToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="8">
                                <Card.Body>You can own 1/4 or more of your Milenium Haus with as many as 3 other owners. Milenium Haus offers fully managed TIC co-ownership designed to make home co-ownership straightforward and turnkey. Milenium Haus sets up the property-specific TIC and handles all the legal maintenance and management your home might need.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>




    )
}

export default TIC_Faq;
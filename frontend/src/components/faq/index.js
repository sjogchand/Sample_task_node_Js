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

function Faq() {
    return (
        <div id='faq' className="faq_container">
            <div className='faq_heading'>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div>
                <Accordion className='faq_wrapper' defaultActiveKey="">
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="0">Do I actually own the home?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Yes. Owning a Milenium Haus is real ownership. You purchase a share in a property-specific LLC. We’ll qualify and you and handle everything to facilitate co-ownership.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="12">What if there’s a dispute between co-owners?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="12">
                            <Card.Body>Legal paperwork will be handled by the Milenium Haus platform, we’ll facilitate all the legal documentation, so that co-owners abide by, and or have a fair dispute resolution process in any case.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="1">What if I want to sell?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>You’re free to sell any time after your first 12 months of ownership. We’ll have an active network of agents and buyers and your home would be listed here with Milenium Haus, as well as promoted via our marketing channels. You may also list on 3rd party sites.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="5">What down payment is required?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>With co-ownership your down payment can be as low as 2-5% of the property and our Milenium Haus ADU. For the average home in San Francisco or Toronto, you’d look at investing between $25,000-100,000 with projected returns in the range of 5-10X over 5 years.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="6">What about financing?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>We’ll help you qualify for financing with our preferred lenders after we help you qualify for a home.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="7">How are prospective owners evaluated?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>Although many prefer to co-own with friends and family, we vet all owners. The co-owners agree to a common-sense code of conduct, as well as legally binding documents that govern the relationship and rights of the co-owners.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <div className='faq_button'>
                    <Theme_Buttom to={"/ownership"} text={"See All FAQs"} />
                </div>
            </div>
        </div>



    )
}

export default Faq;
import React from 'react';
import Head from 'next/head';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import SignUpOptions from '../src/containers/SignUpOptions/SignUpOptions';
import SignUpInputs from '../src/containers/SignUpInputs/SignUpInputs';

export interface IndexProps {
    sng: boolean;
    edd: boolean;
    trial: boolean;
}

export interface IndexState {
    sng: boolean;
    edd: boolean;
    trial: boolean;
}

class Index extends React.PureComponent<IndexProps, IndexState> {
    public state = {
        sng: true,
        edd: false,
        trial: false,
    };

    public render(): React.ReactNode {
        const { sng, edd, trial } = this.state;
        const isSngAndEdd = sng && edd;
        const thanksMessage = <p>Thanks for shopping with</p>;
        const eddGiftMessage = <p>&mdash; now we&apos;re giving you a little extra &mdash;</p>;
        const sngGiftMessage = <p>&ndash; has a limited time offer for you &ndash;</p>;
        const sngAndEddMessage = (
            <div>
                <h1>
                    <span>YOU&apos;RE ELIGIBLE TO RECEIVE YOUR ORDER BY</span> <span>EDD</span>
                </h1>
                <p>
                    with <strong>FREE 2-DAY SHIPPING</strong> by ShopRunner
                </p>
            </div>
        );
        const sngMessage = (
            <h1>
                <strong>Free 2-Day Shipping</strong>
                <br />
                <span>FOR 1 YEAR</span>
            </h1>
        );
        const trialMessage = (
            <div>
                <h1>FREE 2-DAY SHIPPING</h1>
                <p>When you sign up for a 30-day free trial of ShopRunner</p>
            </div>
        );
        const sngAndEddValueProp = (
            <p>Unlimited free 2-day shipping + free returns. More than 140 stores. 2 easy steps.</p>
        );
        const valueProp = (
            <p>Sign up for ShopRunner and enjoy unlimited free 2-day shipping and free returns at 140+ stores.</p>
        );

        const showThankMessage = isSngAndEdd ? thanksMessage : null;
        const showGiftMessage = isSngAndEdd ? eddGiftMessage : sngGiftMessage;
        const showSngOrTrialMessage = trial ? trialMessage : sngMessage;
        const showSignUpMessage = isSngAndEdd ? sngAndEddMessage : showSngOrTrialMessage;
        const showValueProp = isSngAndEdd ? sngAndEddValueProp : valueProp;

        return (
            <div>
                <Head>
                    <title>ShopRunner - Learn more</title>
                </Head>
                <main>
                    <div className="text-center">
                        {showThankMessage}
                        <Image src="http://placecage.com/250/100" alt="Partner logo" className="m-auto" />
                        {showGiftMessage}
                        {showSignUpMessage}
                        {showValueProp}
                    </div>
                    <Form>
                        <Container fluid>
                            <Row>
                                <Col md={6}>
                                    <SignUpOptions />
                                </Col>
                                <Col md={6}>
                                    <SignUpInputs />
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                    <div className="text-center mt-3">
                        <p className="mb-0 small">
                            By clicking activate this offer, you are agreeing to the <a href="./">Terms of Service</a>{' '}
                            and <a href="./">Privacy Policy</a>
                        </p>
                    </div>
                </main>
            </div>
        );
    }
}

export default Index;

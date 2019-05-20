import React from 'react';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import '../src/styles/index.scss';

class Welcome extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <div>
                <Head>
                    <title>ShopRunner - Welcome</title>
                </Head>
                <header>
                    <Navbar>
                        <Navbar.Brand>
                            <Image src="http://placekitten.com/64/64" alt="" />
                        </Navbar.Brand>
                    </Navbar>
                </header>
                <main>
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <div className="px-4 pt-4 pb-1">
                                <div className="text-center">
                                    <h1>Congratulations!</h1>
                                    <h2 className="h3">You now have a complimentary ShopRunner membership.</h2>
                                </div>
                                <hr />
                                <div className="text-center">
                                    <p>With your ShopRunner membership, you get:</p>
                                </div>
                                <Row className="justify-content-center">
                                    <Col md="auto">
                                        <Media>
                                            <Image src="http://placekitten.com/64/64" alt="" />
                                            <Media.Body>
                                                <ul>
                                                    <li>
                                                        <strong>Free 2-Day Shipping</strong>
                                                    </li>
                                                    <li>
                                                        <strong>Free Return Shipping</strong>
                                                    </li>
                                                    <li>
                                                        <strong>Member-Only Deals</strong>
                                                    </li>
                                                </ul>
                                            </Media.Body>
                                        </Media>
                                        <div className="text-center mt-5">
                                            <Button variant="primary">CONTINUE</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </main>
            </div>
        );
    }
}

export default Welcome;

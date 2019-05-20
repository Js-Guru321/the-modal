import React from 'react';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import GenderSelect from '../src/containers/GenderSelect/GenderSelect';
import AgeSelect from '../src/containers/AgeSelect/AgeSelect';
import DemographicSelect from '../src/containers/DemographicSelect/DemographicSelect';

class Personalizer extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <main className="vh-100">
                <Head>
                    <title>ShopRunner - Personalize your ShopRunner experience</title>
                </Head>
                <Row noGutters className="h-100 flex-column flex-md-row">
                    <Col md="auto">
                        <div className="bg-dark text-white p-4 h-100">
                            <div style={{ maxWidth: '344px' }}>
                                <h1>PERSONALIZE YOUR EXPERIENCE</h1>
                                <p>Make the most of your ShopRunner membership by answering just 3 questions.</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Form className="p-4 h-100">
                            <Row className="flex-column h-100" noGutters>
                                <Col>
                                    <GenderSelect />
                                    <AgeSelect />
                                    <DemographicSelect />
                                </Col>
                                <Col xs="auto">
                                    <Row className="justify-content-between">
                                        <Col xs="auto">
                                            <p className="mb-0">
                                                Skip this step.
                                                <br />
                                                <a href="./">Take me back to Under Armour</a>
                                            </p>
                                        </Col>
                                        <Col xs="auto">
                                            <Button variant="dark" type="submit">
                                                finish
                                            </Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </main>
        );
    }
}

export default Personalizer;

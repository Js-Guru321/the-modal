import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class SignUpInputs extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <fieldset>
                <legend className="col-form-label text-center">Activate your ShopRunner account</legend>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Create Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button variant="primary" type="submit" block>
                            Click here to apply free shipping
                        </Button>
                    </Col>
                </Form.Row>
            </fieldset>
        );
    }
}

export default SignUpInputs;

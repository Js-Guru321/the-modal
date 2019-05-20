import React from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

class SignUpOptions extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <fieldset>
                <legend className="col-form-label text-center">Choose 1 of 3 ways to sign up FOR FREE</legend>
                <Form.Check id="sng">
                    <Form.Check.Input type="radio" name="signup" />
                    <Image src="http://placecage.com/100/36" alt="Partner logo" />
                    <Form.Check.Label>Free when you spend $120 today</Form.Check.Label>
                </Form.Check>
                <Form.Check id="amex">
                    <Form.Check.Input type="radio" name="signup" />
                    <Image src="http://placecage.com/36/36" alt="AMEX logo" />
                    <Form.Check.Label>Free with your eligible card</Form.Check.Label>
                </Form.Check>
                <Form.Check id="paypal">
                    <Form.Check.Input type="radio" name="signup" />
                    <Image src="http://placecage.com/36/36" alt="PayPal logo" />
                    <Form.Check.Label>Free with your PayPal account</Form.Check.Label>
                </Form.Check>
            </fieldset>
        );
    }
}

export default SignUpOptions;

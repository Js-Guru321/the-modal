import React from 'react';
import Form from 'react-bootstrap/Form';

class AgeSelect extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <fieldset>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="h2">AGE</Form.Label>
                    <Form.Control as="select">
                        <option>under 21</option>
                        <option>21 to 24</option>
                        <option>25 to 29</option>
                        <option>30 to 34</option>
                        <option>35 to 39</option>
                        <option>40 to 44</option>
                        <option>45 to 49</option>
                        <option>50 to 54</option>
                        <option>55 to 59</option>
                        <option>60 to 64</option>
                        <option>over 65</option>
                    </Form.Control>
                </Form.Group>
            </fieldset>
        );
    }
}

export default AgeSelect;

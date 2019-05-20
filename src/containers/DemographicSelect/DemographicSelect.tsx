import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class DemographicSelect extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <fieldset>
                <legend className="h2">AND I SHOP FOR</legend>
                <p>
                    <small>(select all that apply)</small>
                </p>
                <ButtonToolbar>
                    <ToggleButtonGroup type="checkbox">
                        <ToggleButton value="myself">myself</ToggleButton>
                        <ToggleButton value="my_significant_other">my significant other</ToggleButton>
                        <ToggleButton value="my_children">my children</ToggleButton>
                        <ToggleButton value="friends_and_family">friends and family</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </fieldset>
        );
    }
}

export default DemographicSelect;

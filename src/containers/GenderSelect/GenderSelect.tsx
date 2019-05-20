import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class GenderSelect extends React.PureComponent<{}> {
    public render(): React.ReactNode {
        return (
            <fieldset>
                <legend className="h2">I AM A</legend>
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="gender">
                        <ToggleButton value="woman">woman</ToggleButton>
                        <ToggleButton value="man">man</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
            </fieldset>
        );
    }
}

export default GenderSelect;

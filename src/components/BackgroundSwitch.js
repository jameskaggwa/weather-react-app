import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Checkbox } from '@material-ui/core';

export default function BackgroundSwitch({ bgOn, setBgOn }) {

    const handleChange = (event) => {
        setBgOn(!bgOn);
    };

    return (
        <div>

            <FormControlLabel
                control={<Checkbox checked={bgOn} onChange={handleChange} name="checkedA" />}
                label="Background"
            />

        </div>
    );
}

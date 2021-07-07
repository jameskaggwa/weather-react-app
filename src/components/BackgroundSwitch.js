import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

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

import * as React from 'react';
import Button from '@mui/material/Button'

function CustomButton({title}){
    return(
        <div className='btn'>
            <Button variant='contained'>{title}</Button>
        </div>
    )
}

export default CustomButton;
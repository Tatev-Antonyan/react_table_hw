import CustomButton from './customButton';
import {useState} from 'react';
import * as React from 'react';

function Header(){
    const [name, setName] = useState()
    
    const changeName = (event) => {
        setName(event.target.value);
    }

    const handleClick = (event) => {
        alert(event.target.value);
    }

    return (
        <div>
            <nav className='nav_bar'>
                <input name={'nav_input'} onChange={changeName}/>
                <label for={'nav_input'}>{name}</label>
                <CustomButton title={'Sign In'} onclick={handleClick}/>
            </nav>
        </div>
    )
}

export default Header;
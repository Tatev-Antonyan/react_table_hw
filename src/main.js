import CustomButton from "./customButton";
import {useState} from 'react';

function Main(){
    const [item, setItem] = useState()

       
    const changeItem = (event) => {
        setItem(event.target.value);
    }

    const handleClick = () => {
        alert('Hi');
    }
    return(
        <div className={'search_box'}>
            <CustomButton title={'Search'} onClick={handleClick}/>
            <input id={'search_input'} onChange={changeItem}/>
            <label for={'search_input'}>{item}</label>              
        </div>
    )
}

export default Main;
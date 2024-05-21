import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onImputChange = ({target}) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (event) => { 
        event.preventDefault();
        onNewCategory(inputValue);   
        setInputValue('');        
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gif"
                value={inputValue}
                onChange={onImputChange}
            />
        </form>
    )
}
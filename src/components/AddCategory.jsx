import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {

    event.preventDefault(); // Se utiliza para evitar que el navegador haga el refresh cuando presionemos enter

    if (inputValue.trim().length <= 1) {
      return;
    }

    //Este llamado de set categories del useState del otro componente
    //nos permite un callBack que en este caso es (categories) del otro comp.
    // setCategories((categories) => [inputValue, ...categories]);

    onNewCategory(inputValue.trim())
    setInputValue('');
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

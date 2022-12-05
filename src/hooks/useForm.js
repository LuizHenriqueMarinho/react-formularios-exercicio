import { useState } from "react";

export const useForm = (initialState) => 
{
    const [formulario, setFormulario] = useState(initialState);

    console.log(formulario);

    const onChangeForm = (event) => {
    const { name, value } = event.target;
    setFormulario({ ...formulario, [name]: value });
    };

    return [formulario, onChangeForm];
};

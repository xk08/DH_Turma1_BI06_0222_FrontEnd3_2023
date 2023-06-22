import { useState, useContext } from "react";

import ServiceContext from "../contexts/ServiceContext";


function Form() {

    const defaultFormValues = {
        id: 0,
        type: "",
        time: ""
    };

    const [form, setForm] = useState(defaultFormValues);

    const { services, dispatch } = useContext(ServiceContext);


    const handleCreateService = (event) => {
        event.preventDefault();

        if (form.type && form.time) {

            const newService = {
                id: Date.now(),
                type: form.type,
                time: form.time
            };

            dispatch(
                {
                    type: "ADD_SERVICE",
                    payload: [newService, ...services]
                }
            );

            setForm(defaultFormValues);

        } else {
            alert("Verifique os dados do seu atendimento!")
        }
    }

    return (
        <form>

            <div>
                <label htmlFor="">Descrição</label>
                <br />
                <input
                    type="text"
                    value={form.type}
                    onChange={event => setForm({ ...form, type: event.target.value })}
                />
            </div>

            <br />

            <div>
                <label htmlFor="">Tempo estimado</label>
                <br />
                <input
                    type="text"
                    value={form.time}
                    onChange={event => setForm({ ...form, time: event.target.value })}
                />
            </div>

            <button onClick={handleCreateService}>Salvar</button>

        </form>
    );
}

export default Form;
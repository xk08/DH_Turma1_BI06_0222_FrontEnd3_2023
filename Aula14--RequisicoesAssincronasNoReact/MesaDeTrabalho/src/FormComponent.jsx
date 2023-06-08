import { useState } from "react";

function FormComponent({ commentsList }) {

    const [commentTitle, setCommentTitle] = useState("");
    const [commentDescription, setCommentDescription] = useState("");

    const handleClickButtonSendPostComment = async (event) => {
        event.preventDefault();

        const comment =
        {
            title: commentTitle,
            description: commentDescription
        }

        setCommentTitle("");
        setCommentDescription("");

        /// Enviando para a API os dados (via POST em um Fetch)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const data = await response.json();

        console.log(response);
        console.log(data);
    }

    return (
        <>
            <form>

                <div>
                    <label style={{ color: "#8b0b7aea" }}>Título</label>
                    <br />
                    <input type="text" value={commentTitle} onChange={e => setCommentTitle(e.target.value)} />
                </div>

                <br />

                <div>
                    <label style={{ color: "#8b0b7aea" }}>Descrição</label>
                    <br />
                    <textarea type="text" value={commentDescription} onChange={e => setCommentDescription(e.target.value)} />
                </div>

                <br />

                <button
                    style={{ color: "#8b0b7aea" }}
                    onClick={handleClickButtonSendPostComment}
                >Enviar</button>

            </form>
        </>
    );
}

export default FormComponent;
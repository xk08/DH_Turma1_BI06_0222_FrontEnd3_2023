import { useEffect } from 'react';

function CommentComponent({ id, title, email, comment }) {

    useEffect(() => {
        console.log("<CommentComponent /> foi MONTADO");

        return function unmountingComponent() {
            console.log("<CommentComponent /> foi DESMONTADO");
        }

    }, []);

    return (
        <div style={{
            border: "1px solid #8b0b7aea",
            margin: "2%",
            borderRadius: "15px"
        }}>
            <h3 style={{ color: "#8b0b7aea" }}>{title} ({id})</h3>
            <p>{comment}</p>
            <p style={{ color: "#8b0b7aea" }}>{email}</p>
        </div>
    );
}

export default CommentComponent;
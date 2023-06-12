import style from "./ProductList.module.css";
import { useEffect } from "react";

function ProductList({ productsIsLoading, productList, fnEditProductCallBack, fnDeleteProductCallBack }) {

    useEffect(() => {
        console.log("<ProductList/> foi Montado");
    }, []);

    return (

        <>
            {
                !productsIsLoading ? /// Se não estiver em loading
                    productList.length > 0 ? /// Se a lista não for vazia

                        <div className={style.flex}>
                            {
                                productList.map((product) => {

                                    return (

                                        <div key={product.id}
                                            className={style.div}
                                        >
                                            <div className={style.title}>{product.title}</div>
                                            <div className={style.description}>{product.description}</div>
                                            <div className={style.details}>Preço: {product.price}</div>
                                            <div className={style.details}>Estoque: {product.stock}</div>
                                            <div className={style.details}>Categoria: {product.category}</div>
                                            <div className={style.details}>Código: {product.id}</div>
                                            <img
                                                src={product.image}
                                                alt={product.id}
                                                className={style.img}
                                            />

                                            <br />
                                            <button className={style.button} onClick={() => fnEditProductCallBack(product)}>Editar</button>
                                            <button className={style.button} onClick={() => fnDeleteProductCallBack(product)}>Excluir</button>
                                        </div>
                                    )
                                })

                            }
                        </div>


                        : <h2>A lista se encontra vazia</h2>
                    : <h2>Carregando produtos....</h2> /* Se estiver em estado de loading */
            }

        </>
    );
}

export default ProductList;
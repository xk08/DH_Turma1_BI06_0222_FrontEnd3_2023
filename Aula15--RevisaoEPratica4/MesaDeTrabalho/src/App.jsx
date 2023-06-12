import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

import ProductList from "./ProductList";
import Input from "./Input";

function App() {

  ///Estados do Produto
  const [products, setProducts] = useState([]);
  const [productsIsLoading, setProductsIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  /// Estados do formulário
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);


  useEffect(() => {
    console.log("<App/> foi Montado");
    getProducts();
  }, []);

  /* REQUISITO: você deverá criar uma requisição que é executada logo na montagem dos 
  componentes para buscar todos os produtos cadastrados no servidor e mostrá-los, 
  através de uma lista, em um componente do sistema. */
  const getProducts = async () => {

    setProductsIsLoading(true);

    try {
      /// Buscamos os dados na API-Mock
      const response = await axios.get("api/products");
      const products = response.data.products;

      setProductsIsLoading(false);

      if (products.length > 0) { /// Se a lista não for vazia (mesmo vindo da API-Mock é interessante "garantir" antes de setar o estado)
        setProducts(products);
      } else {
        setProducts([]);
      }

    } catch (error) {
      console.log(error);
      setProductsIsLoading(false);
      setProducts([]);
    }

  }

  /* Função chamada via CallBack pelo componente <ProductList/> ao clicar no botão de editar */
  function fillFieldsStatesOnEdit(product) {
    /* NOTA DO PROF: 
    Ao fazer isso, vai pegar o objeto que está sendo editado, o estado de "product"
    será atualizado pelos dados da edição. 

    Esse setProduct, fará com que o useEffect abaixo, sofra alteração, e altere os campos do formulário automáticamente
     */
    console.log(product);
    setProduct(product)
  }

  useEffect(() => {

    if (product.id) { /// Só existe ID no momento da edição, 
      // ao criar um novo produto não passamos o id no formulário
      setId(product.id);
      setTitle(product.title);
      setDescription(product.description);
      setCategory(product.category);
      setPrice(product.price);
      setStock(product.stock);
      setImage(product.image);
      setFormIsValid(true);
    }
  }, [product]); /// Sempre que a edição for chamada, esse objeto sofrerá alteração e o efeito colateral será executado.

  function formValidator() {

    if (title && description && price && stock && category && image) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }

  function handleClickButtonSaveProduct(event) {

    event.preventDefault();

    const product = {
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
      image: image
    }

    /// Chamamos a função da API responsável por cadastrar o novo produto
    createProductApi(product);
  }

  async function createProductApi(product) {

    try {
      const response = await axios.post("api/products", product);

      if (response.status == 200 || response.status == 201) {

        /// Limpamos os campos do formulário
        clearFormFieldsStates();

        ///Chamamos função que fará a atualização dos dados da API
        getProducts();

      } else {
        throw response.data;
      }

    } catch (error) {
      alert(`Ocorreu algum erro ao salvar o novo produto - Erro: ${error}`)
    }

  }

  /* REQUISITO: Esse formulário deve ser utilizado tanto para inserir quanto para atualizar um produto. */
  function handleClickButtonEditProduct(event) {

    event.preventDefault();

    const product = {
      id: id,
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
      image: image
    }

    /// Chamamos a função da API responsável por editar o novo produto
    editProductApi(product);
  }

  async function editProductApi(product) {

    try {
      const response = await axios.put(`api/products/${product.id}`, product);

      if (response.status == 200 || response.status == 201) {

        /// Limpamos os campos do formulário
        clearFormFieldsStates();

        ///Chamamos função  que fará a atualização dos dados da API
        getProducts();

      } else {
        throw response.data;
      }

    } catch (error) {
      alert(`Ocorreu algum erro ao editar o produto - Erro: ${error}`)
    }

  }

  /* REQUISITO: Cada componente da lista deverá ter um botão de excluir, para que quando o usuário clica-lo o item relacionado ao ele deverá ser excluído. */
  async function handleClickButtonDeleteProduct(product) {

    if (product.id) {

      const result = confirm(`Deseja realmente apagar ${product.title}?`)

      if (result) {

        const response = await axios.delete(`api/products/${product.id}`);
        if (response.status == 200 || response.status == 204) {
          getProducts();
        }

      }

    }

  }

  function clearFormFieldsStates() {
    setFormIsValid(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setImage("")
    setPrice("");
    setStock("");
    setId("");
  }


  return (
    <>

      <h2>Cadastre seu produto</h2>

      {/* REQUISITO: Criar um formulário com os campos referentes à estrutura do objeto de resposta.  */}
      <form>

        <Input
          title="Título"
          type="text"
          value={title}
          fnOnChange={(e) => setTitle(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Descrição"
          type="text"
          value={description}
          fnOnChange={(e) => setDescription(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Preço"
          type="text"
          value={price}
          fnOnChange={(e) => setPrice(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Estoque"
          type="text"
          value={stock}
          fnOnChange={(e) => setStock(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Categoria"
          type="text"
          value={category}
          fnOnChange={(e) => setCategory(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="IMG Url"
          type="text"
          value={image}
          fnOnChange={(e) => setImage(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <button
          disabled={!formIsValid}
          onClick={(event) => id ? handleClickButtonEditProduct(event) : handleClickButtonSaveProduct(event)}>
          {id ? "Editar" : "Cadastrar"}
        </button>

      </form>

      {/* Lista de produtos */}
      <h2>Lista de produtos</h2>

      <ProductList
        productsIsLoading={productsIsLoading}
        productList={products}
        fnEditProductCallBack={fillFieldsStatesOnEdit}
        fnDeleteProductCallBack={handleClickButtonDeleteProduct}
      />

    </>
  );
}

export default App;

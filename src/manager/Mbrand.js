import React, { useEffect, useState } from "react";
import AddBrand from "./AddBrand";
import "../styles/Misc.css";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const [brandList, setBrandList] = useState([]);

  const saveBrand = (taskObj) => {
    let tempList = brandList;
    tempList.push(taskObj);
    localStorage.setItem("brandList", JSON.stringify(tempList));
    setBrandList(brandList);
    setModal(false);
  };

  const [todos, setTodos] = useState([]);

  const [brandName, setBrandName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addBrand = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      brandName: brandName,
      image: image,
      price: price,
      quantity: quantity,
    };
    setTodos([todo, ...todos]);
    console.log(todo);
  };

  const deleteTodo = (id) => {
    const filterarray = todos.filter((x) => x.id !== id);
    setTodos(filterarray);
  };


  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col">
            <div className="taskbtn">
              <button
                className="btn btn-outline-dark btn-block rounded-pill"
                id="creatTaskBtn"
                onClick={() => setModal(true)}
              >
                Add Brand
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bTitle">Our Top Quality Ice Cream Brands</h1>
      <div className="menuList">
        {todos.map((item, index) => (
          <div className="todo_card" key={item.id}>
            <p id="bnames">{item.brandName}</p>
            <p className="card_text">{item.image}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{item.price}</strong>
            </p>
            <p className="card_text">Quantity: {item.quantity}</p>
            <br />
            <br />
            <button type="submit" onClick={() => deleteTodo(item.id)}>
              Delete
            </button>
            <br />
            <br />
            <br />

            <Link to="/Mflavor">
              <button type="submit"> View Flavors</button>
            </Link>
          </div>
        ))}
      </div>

      <AddBrand
        toggle={toggle}
        modal={modal}
        save={saveBrand}
        addBrand={addBrand}
        name={brandName}
        image={image}
        setBrandName={setBrandName}
        setImage={setImage}
        price={price}
        setPrice={setPrice}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </>
  );
};

export default TodoList;

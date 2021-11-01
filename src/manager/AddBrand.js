import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const AddBrand = ({
  modal,
  toggle,
  save,
  addBrand,
  brandName,
  price,
  quantity,
  setBrandName,
  setPrice,
  setQuantity,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (name === "brandName") {
      setBrandName(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "quantity") {
      setQuantity(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = brandName;
    taskObj["Price"] = price;
    taskObj["Quantity"] = quantity;
    save(taskObj);
    addBrand();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Brand</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label className="form-lable required">Name</label>
            <input
              type="text"
              className="form-control"
              value={brandName}
              onChange={handleChange}
              name="brandName"
            />
          </div>
          <br />
          <br />
          <div className="form-group">
            <label className="form-lable required">Price</label>
            <input
              type="text"
              className="form-control"
              value={price}
              onChange={handleChange}
              name="price"
            />
          </div>
          <br />
          <div className="form-group">
            <label className="form-lable required">Quantity</label>
            <input
              type="text"
              className="form-control"
              value={quantity}
              onChange={handleChange}
              name="quantity"
            />
          </div>
          {/* <div className="form-group">
            <label className="form-lable required">Image</label>
            <input
              type="file"
              className="form-control"
              value={image}
              onChange={handleChange}
              name="image"
            />
          </div> */}

        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Submit
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddBrand;

import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import { axiosRequest } from "../../services/axiosinstance";
import './ItemAdd.css'

function ItemAddPage({ setActive }) {
  const { setItems } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkToPhoto, setLinkToPhoto] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const onHandleAddItem = async (e) => {
    try {
      e.preventDefault();

      const response = await axiosRequest.post("/items",{title, description, linkToPhoto, price, quantity});

      if (response.status === 201) {
        setItems((prev) => [...prev, response.data.item]);
        setTitle("");
        setDescription("");
        setLinkToPhoto("");
        setPrice(0);
        setQuantity(0);
        setActive(false);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };
  return (
    <dev className='add-form'>
    <form onSubmit={onHandleAddItem} className="form">
      <h2>Add new item</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <input
        type="text"
        value={linkToPhoto}
        onChange={(e) => setLinkToPhoto(e.target.value)}
        placeholder="link to photo"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        placeholder="price"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        placeholder="quantity"
      />

      <button type="submit">Add</button>
    </form>

    </dev>

  );
}

export default ItemAddPage;

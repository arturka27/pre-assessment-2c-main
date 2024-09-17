import React, { useContext, useState } from "react";
import { axiosRequest } from "../../services/axiosinstance";
import { AppContext } from "../../app/AppContext";

function ItemUpdatePage({ item, setActive }) {
  const { items, setItems } = useContext(AppContext);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [linkToPhoto, setLinkToPhoto] = useState(item.linkToPhoto);
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);

  const onHandleUpdateItem = async (e) => {
    e.preventDefault()
    try {

        const response = await axiosRequest.put(`/items/${item.id}`, {
            title,
            description,
            linkToPhoto,
            price: +price,
            quantity: +quantity
        })

        if(response.status === 200) {
            setItems((prev) => prev.map((it) => (it.id === item.id? response.data.item : it)))
            setActive(false)
        }

    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  return (
    <form onSubmit={onHandleUpdateItem} className="form">
      <h2>Update item:</h2>
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

      <button type="submit">Update</button>
    </form>
  );
}
export default ItemUpdatePage;

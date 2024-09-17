import React, { useContext, useState } from "react";
import { AppContext } from "../../app/AppContext";
import ItemUpdatePage from "./ItemUpdatePage";
import ModalWindow from "../../shared/ui/ModalWindow";
import { axiosRequest } from "../../services/axiosinstance";
import './ItemPage.css'
function ItemSingle({ item }) {
  const { user, setItems } = useContext(AppContext);
  const [active, setActiv] = useState(false);

  const isActive = () => {
    setActiv((prev) => !prev);
  };

  const onHandleDelete = async () => {
    try {
        const response = await axiosRequest.delete(`/items/${item.id}`);
        if (response.status === 200) {
          setItems((prev) => prev.filter((it) => it.id !== item.id));
        //   navigate(-1);
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div className="item-single">
      <img width="300px"src={item.linkToPhoto} alt={`${item.title} photo`} />
      <b>{item.title}</b>
      <p>{item.description}</p>
      {user && user.isSeller && item.userId === user.id && (
        <div>
          <button onClick={isActive}>update</button>
          <button onClick={onHandleDelete}>delete</button>
        </div>
      )}
      
      <ModalWindow active={active} setActive={setActiv}>
        <ItemUpdatePage item={item} setActive={setActiv} />
      </ModalWindow>
    </div>
  );
}

export default ItemSingle;

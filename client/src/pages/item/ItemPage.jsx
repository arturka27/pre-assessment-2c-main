import ItemSingle from './ItemSingle';
import React, { useContext, useState } from "react";
import ModalWindow from "../../shared/ui/ModalWindow";
import { AppContext } from "../../app/AppContext";
import ItemAddPage from './ItemAddPage';
import './ItemPage.css'

function ItemPage() {
    const [active, setActiv] = useState(false)
    const {user, items, setItems } = useContext(AppContext)

    const isActive = () => {
        setActiv((prev) => !prev)
    }
  return (
    <div className="item-page">
      {user && user.isSeller && (
        <button onClick={isActive}>
          Add new item
        </button>
      )}
      <ModalWindow active={active} setActive={setActiv}>
        <ItemAddPage setActive={setActiv} />
      </ModalWindow>
      <div>
      {items &&
        items.map((item) => (
          <ItemSingle key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemPage;
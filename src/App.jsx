import s from "./style.module.css"
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import { useState } from "react";
export function App(){

  const [currentDifficulty, setDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setDifficulty(difficulty)
  }
  
    return (
      <div>
      <h1>Click on menu list to set difficulty</h1>
    <div className={s.boxes}>
          <MenuList onItemClick={onMenuListItemClick}/>
          <DisplayDifficulty difficulty={currentDifficulty}/>
      </div>
      </div>)
}
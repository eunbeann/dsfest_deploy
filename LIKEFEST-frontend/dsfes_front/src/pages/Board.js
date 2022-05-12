import React, { useState, useEffect, useCallback, useRef } from "react";
import BoardInsert from "../components/BoardInsert";
import BoardList from "../components/BoardList";
import styles from "../css/Board.module.css";
import HeaderTitle from "../components/HeaderTitle";
import axios from "axios";
//const URLB = process.env.NODE_ENV === 'production' ? 'http://dswu2022f5.site/' : 'http://localhost:3000/';

const Board = () => {
  const [texts, setTexts] = useState([]);

  const changeTexts = (text) => {
    setTexts(texts.concat(text));
  };

  useEffect(() => {
    axios
      .get("http://dswu2022f5.site/api/board")
      .then((res) => {
        setTexts(res.data);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);

  return (
    <div className={styles.boardbody}>
      <BoardInsert texts={texts} changeTexts={changeTexts} />
      <BoardList texts={texts} />
    </div>
  );
};
export default Board;

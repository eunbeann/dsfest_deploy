import React, { useState, useEffect, useCallback, useRef } from "react";
import BoardInsert from "../components/BoardInsert";
import BoardList from "../components/BoardList";
import styles from "../css/Board.module.css";
import HeaderTitle from "../components/HeaderTitle";
import axios from "axios";
const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'

const Board = () => {
  const [texts, setTexts] = useState([]);

  const changeTexts = (text) => {
    setTexts(texts.concat(text));
  };

  useEffect(() => {
    axios
      .get(URL + "/board")
      .then((res) => {
        setTexts(res.data);
      })
      .catch((error) => {
        console.log("Network Error : ", error);
        console.log(">>>>>> URL " + URL);
      });
  }, []);

  return (
    <div className={styles.boardbody}>
      <BoardInsert texts={texts} changeTexts={changeTexts} />
      <BoardList texts={texts} />
    </div>
  );
};
export default Board;

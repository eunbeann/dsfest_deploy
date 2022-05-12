import React, { useState, useEffect } from "react";
import axios from "axios";
import NoticeItem from "./NoticeItem";
const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'

const NoticeList = () => {
  const [contents, setContents] = useState([]);
  // 데이터 불러오기
  useEffect(() => {
    axios
      .get(URL + "/api/notice")
      .then((res) => {
        setContents(res.data);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);

  return (
    <div>
      <div>
        {contents.reverse().map((content) => (
          <NoticeItem content={content} key={content.id} />
        ))}
      </div>
    </div>
  );
};

export default NoticeList;

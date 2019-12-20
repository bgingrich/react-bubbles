import React, { useState, useEffect } from "react";
import axiosWithAuth from '../axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
      setColorList(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  };

  console.log(colorList);

  return (
    <>
      <Bubbles colors={colorList} />
      <ColorList colors={colorList} updateColors={setColorList} />
    </>
  );
};

export default BubblePage;

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { YOUR_BUTTON_LIST_API } from "../utils/Constant";

const ButtonList = ({handleBtnById}) => {
  const [BtnList, SetBtnList] = useState();

  useEffect(() => {
    getbuttonlist();
  }, []);

  const getbuttonlist = async () => {
    const data = await fetch(YOUR_BUTTON_LIST_API);
    const json = await data.json();
    SetBtnList(json.items)
    // console.log(json.items)
    
  };
  // console.log(BtnList)

  return <div className="flex flex-row overflow-auto px-4 mt-3">
    {
      BtnList&&(BtnList.map((i)=>{
        return(
          <Button name={i.snippet.title} key={i.id} videoID={i.id}  handleBtnById={handleBtnById}/>
        )
      }))
    }
  </div>;
};

export default ButtonList;

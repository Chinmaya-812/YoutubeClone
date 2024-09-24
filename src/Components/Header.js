import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const searchCache = useSelector((i) => i.search);
  useEffect(() => {
    // make an API call  after every key press
    //but if the difference between 2 API call is <200ms
    //  Decline the API call

    //(Debouncing)

    const timer = setTimeout(() => {
      //(Caching)
      if (searchCache[searchquery]) {
        SetSuggestion(searchCache[searchquery]);
      } else {
        getSearchSuggestions();
      }
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      console.log("exit");
    };
    // eslint-disable-next-line
  }, [searchquery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
      console.log("API call ");

      if (!data.ok) {
        throw new Error(`Network response was not ok: ${data.statusText}`);
      }
      const json = await data.json();
      SetSuggestion(json[1]);
      dispatch(cacheResults({ [searchquery]: json[1] }));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg fixed top-0 w-full bg-gray-50 z-50 px-3">
      <div className="flex col-span-1">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAADIyMjZ2dnPz88jIyMeHh7c3Ny9vb0/Pz8uLi7n5+egoKD6+vrS0tLx8fFsbGwMDAwzMzOCgoKIiIiqqqpnZ2dbW1u2trZxcXFHR0eZmZkoKCgVFRV8fHxPT0+QkJA02F9hAAACq0lEQVR4nO3c63aqMBCGYQQ8cEaUakGl93+V1VpX2x/ksPaPybDf5wpmVsSE5AtRBAAAAAAAAAAAgAAUdRywunDvpNqV78NlE6zL8F7uKrde0kO+Cl5+SF166QfpQt0Mvb2X8SpdpavraB2XvXSN7vaWsYkz6Qp9ZLGpl+YoXZ+fY2MamI10eX42hqGpSunqfJXz003xJl2cr7f5tUCiYLb8K09mm6mla/NXzzaTSpfmb35Rs6iRSS7Stfm6zD8zi/o3W9Q8E8VqlsxPV9PirDlIl+fnYFqbRamuVbPlbbNfS1fobm1716xKNY/N1fT0f3ezky7SldMGTXOSLtPFyfjs/1LcAt8JuN48tgHvv7ZiG6zCcQMQAAAAAAAAwLyq3gWs9tkFjNsp6/JgddnUGvNMvxSZgjjQJnPabVZzSFvae1GUODtax0XNwdnj6Mzcy5IOaBd1dB4rOmt+WBNrDBWxxmARawyVIdbYSdfmqzPEGlvp4ny1hlhjL12cr97wmpYqi89eTIszdVdOjO/PtZILZ0/D/H/Zl17T+4z1Ct0oXaI76wW6KDormWy6s72X+2xzUtBOd3LNAqbHdhqyYA1Te3S6P/ut2qbSt7HnpVtyjQAAAAAAAMA/a5I0WInrhfOvRurgzzbb2q2hajtJl+pictmjbdQc0vbWwWnGwL9r8GM/WrqpegXJ2ZeN6eD8LlZwzvSjM3+t8SZdn5+bMdYoXZ0vU6xR0VHzkynWqOKLM78ZjmkTZeHZ1WpNrDFU/0mscatqynzotrPNLCrWGKlZMb+YQlpLutgQVR/S5fn5MMcaVbxlvkyWWONZ0/uMNT6n59uT1i9PPsZGyS9tcoo1JqOCubMb55eYf6Xnw5Svg5VPh7NPrLEpkoAVPluaAAAAAAAAAAAAYfkE1AdllFVOdrYAAAAASUVORK5CYII="
          alt="menu"
          className="h-8 mt-4 ml-6 cursor-pointer transition-transform duration-1000 ease-in-out transform hover:scale-125"
          onClick={() => toggleMenuhandler()}
        />

        <a href="/">
          <img
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="Logo"
            className="h-16 lg:block md:block sm:hidden"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 flex items-center">
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            className="rounded-l-full bg-gray-50 focus:ring-blue-500 w-2/3 py-[9px] px-5 border border-gray-400"
            value={searchquery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
          />
          <button className="border border-gray-800 p-2 absolute t-2 rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="2px"
              width="50"
              height="25"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
            </svg>
          </button>
          {isFocused && suggestion.length > 1 && (
            <div className="fixed bg-white px-3 py-2 w-[50rem] rounded-xl shadow-lg border border-gray-100 mt-1">
              <ul onChange={()=>{
                alert('Hey')
              }}>
                {suggestion.map(function (i) {
                  return (
                    <li
                      className="py-2 px-3 shadow-sm hover:bg-gray-200"
                      key={i} 
                      onMouseDown={()=>alert(i)}
                    >
                      {" 🔍 "} {i}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-flow-col col-span-1 pr-7">
        <div className="flex">
          <img
            src="data:image/png;base64,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"
            alt="user_icon"
            className="h-8 mt-4"
          />
          <button>SignIn</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

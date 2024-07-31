import React, {createContext,useState,useEffect} from "react";

import {fetchDataFromApi} from "../utils/api";

export const Context =createContext();

export const Appcontext=(props)=>{
    const [loading,setLoading]=useState(false);
    const [searchResults,setsearchResults]=useState([]);
    const [selectedCategories,setSelectedCategories]=useState("New");
    const [mobileMenu,setMobileMenu]=useState(false);

    useEffect(()=>{
         fetchSelectedcategoryData(selectedCategories)
    },[selectedCategories]);

    const fetchSelectedcategoryData=(query)=>{
          setLoading(true)
          fetchDataFromApi(`search/?q=${query}`).then(({contents
          })=>{
            console.log(contents);
            setsearchResults(contents);
            setLoading(false);
          });
    };

    return (
        <Context.Provider value= {{
           loading,
           setLoading,
           searchResults,
           selectedCategories,
           setSelectedCategories,
           mobileMenu,
           setMobileMenu,
        }}>
            {props.children}
            </Context.Provider>
    );
}
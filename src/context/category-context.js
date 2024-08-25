import { createContext,useContext,useState } from "react";

const initialValue="National Parks"
const CategoryContext=createContext(initialValue)

export const CategoryProvider=({children})=>{
    const [hotelCategory,setHotelCategory]=useState(initialValue)

    return (
        <CategoryContext.Provider value={{hotelCategory,setHotelCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory=()=>useContext(CategoryContext)


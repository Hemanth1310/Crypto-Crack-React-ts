import React,{ useState,createContext, useContext } from "react";
import type { Currency } from "../Types";


type SelectedCurrencyContextTypes = {
    selectedCurrency:Currency;
    handleCurrencyChange:(newCurreny:Currency)=>void
}

const SelectedCurrencyContext = createContext<SelectedCurrencyContextTypes>({
    selectedCurrency:'usd',
    handleCurrencyChange:()=>{}
})

export const SelectedCurrencyContextProvider = ({children}:{children:React.ReactNode})=>{
    const [selectedCurrency,setSelectedCurrency] = useState<Currency>('usd')

    const handleCurrencyChange = (newCurreny:Currency)=>{
        setSelectedCurrency(newCurreny)
    }

    return(
    <SelectedCurrencyContext.Provider value={{selectedCurrency,handleCurrencyChange}}>
        {children}
    </SelectedCurrencyContext.Provider>)
}

export const handleCurrency=()=>{
    return useContext(SelectedCurrencyContext)
}
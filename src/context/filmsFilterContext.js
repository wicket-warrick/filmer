import propTypes from "prop-types";

import { createContext,useState } from "react";


export const FilmsFilterContext=createContext()

export const FilmsFilterProvider=({children})=>{

    const [textFilter,setTextFilter]=useState('')
    return(
        <FilmsFilterContext.Provider value={{textFilter,setTextFilter}}>
            {children}
        </FilmsFilterContext.Provider>
    )
}

FilmsFilterProvider.propTypes={
    children:propTypes.object
}
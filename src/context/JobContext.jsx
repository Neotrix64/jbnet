import { createContext, useState, useContext, Children } from "react";

const JobContext = createContext();

export const JobContextProvider = ({children}) =>{
    const [CurrentJobID, setCurrentJobID] = useState("");

    return(
        <JobContext.Provider value={{useCurrentJobID, setCurrentJobID}}>
            {children}
        </JobContext.Provider>
    )
}

export const useCurrentJobID = () => useContext(JobContext);
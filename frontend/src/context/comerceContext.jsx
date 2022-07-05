import { createContext } from 'react'
import { useState } from 'react'

const comerceContext = createContext()

export const ComerceProvider = ({ children }) => {
	const [selectedList, setSelectedList]=useState([]);
	
	return (
		<comerceContext.Provider value={{selectedList, setSelectedList}}>
			{children}
		</comerceContext.Provider>
	)
}

export default comerceContext;
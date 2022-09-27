import React from 'react'
import { createContext,useState } from 'react'

export const DataContext=createContext(null)

const DataProvider = ({children}) => {
    const [notes,setNotes]=useState([])
    const [archiveNotes,setArchiveNotes]=useState([])
    const [deletedNotes,setDeletedNotes]=useState([])
    const [addNote,setAddNote]=useState([])

  return (
    <DataContext.Provider value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deletedNotes,
        setDeletedNotes,
        addNote,
        setAddNote

    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider

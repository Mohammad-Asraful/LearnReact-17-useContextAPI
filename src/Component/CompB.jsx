import React, { useContext } from 'react'
import { FirstName, LastName } from '../App'
import CompC from './CompC'

const CompB = () => {
   const fName = useContext(FirstName)
   const lName = useContext(LastName)
   return <>
      <h1>My name is {fName} {lName}</h1>
      <CompC />
   </>
}

export default CompB
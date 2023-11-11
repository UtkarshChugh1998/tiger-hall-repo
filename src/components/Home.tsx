import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'

export const Home = () => {
    const [searchVal, setSearchVal] = useState('')

    const handleChange = (e: any) => {
        setSearchVal(e.target.value)
    }
    return (
        <div><Input placeholder='Search Content' type='text' size='md' value={searchVal} onChange={handleChange}/></div>
    )
}

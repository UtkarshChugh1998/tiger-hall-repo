import React, { useEffect, useState, createContext } from 'react'
import { Input, Spinner } from '@chakra-ui/react'
import { getSearchContent } from './hooks/getSearchContent'
import { ResponseType } from './types/Types'
import { Content } from './content/components/Content'
import { ErrorMessage } from './common/ErrorMessage'
import { useDebounce } from './common/utils/useDebounce'
import { NavigationTabs } from './home/NavigationTabs'
import { tabValues } from './home/tabValues'

export const Home = () => {
    const [data, setData] = useState<ResponseType | undefined>()
    const [searchVal, setSearchVal] = useState('')
    const [debounce, setDebounce] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const [tabIndex, setIndex] = useState<number>(0)
    const DataProvider = createContext(data)

    const handleChange = (e: any) => {
        setSearchVal(e.target.value)
    }
    
    useDebounce(searchVal, setDebounce, 300);

    useEffect(() => {
        const tabVal = tabValues[tabIndex]
        getSearchContent(debounce, tabVal, setData,  setLoading, setError)
    }, [debounce, tabIndex])

    useEffect(() => {
        console.log('Data is', data)
    }, [data])
    return (
        <div className='homeContainer'>

            <div className='inputContainer'>
                <Input placeholder='Search Content' w='400px' color='white' backgroundColor='gray.700' type='text' size='md' value={searchVal} onChange={handleChange} />
            </div>
            <div className='bodyContainer'>
                <NavigationTabs tabIndex={tabIndex} setTabIndex={setIndex} data={data} loading={loading} error={error} />
            </div>
        </div>
    )
}

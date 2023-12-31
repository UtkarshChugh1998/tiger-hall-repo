import React, { useEffect, useState } from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { getSearchContent } from './hooks/getSearchContent'
import { ResponseType } from './types/Types'
import { useDebounce } from './common/utils/useDebounce'
import { NavigationTabs } from './home/NavigationTabs'
import { tabValues } from './home/tabValues'
import { SearchIcon } from '@chakra-ui/icons'

export const Home = () => {
  const [data, setData] = useState<ResponseType | undefined>()
  const [searchVal, setSearchVal] = useState('')
  const [debounce, setDebounce] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [tabIndex, setIndex] = useState<number>(0)

  const handleChange = (e: any) => {
    setSearchVal(e.target.value)
  }

  useDebounce(searchVal, setDebounce, 300)

  useEffect(() => {
    const tabVal = tabValues[tabIndex]
    getSearchContent(debounce, tabVal, setData, setLoading, setError)
  }, [debounce, tabIndex])

  useEffect(() => {
    console.log('Data is', data)
  }, [data])
  return (
    <div className="homeContainer">
      <div className="inputContainer">
        <InputGroup w="400px" m={'auto'}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            role="input"
            placeholder="Search Content"
            w="400px"
            color="white"
            backgroundColor="gray.700"
            type="text"
            size="md"
            value={searchVal}
            onChange={handleChange}
          />
        </InputGroup>
      </div>
      <div className="bodyContainer">
        <NavigationTabs
          tabIndex={tabIndex}
          setTabIndex={setIndex}
          data={data}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

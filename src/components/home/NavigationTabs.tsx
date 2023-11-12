import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Spinner } from '@chakra-ui/react'
import { tabValues } from './tabValues'
import {TabContent} from './TabContent'
import { ErrorMessage } from '../common/ErrorMessage'
export const NavigationTabs = (props: any) => {
    const {tabIndex, setTabIndex, data, loading, error} = props
    return (
        <Tabs isFitted index={tabIndex} onChange={(index) => setTabIndex(index)} color='white' h='50px' maxW='800px'>
        
            <TabList>
                {tabValues.map((tab) => (
                    <Tab>{tab}</Tab>
                ))}
            </TabList>

            <TabPanels  h='calc(100vh - 150px)' overflowY='auto'>
                {tabValues.map((tab) => (
                    <TabPanel>
                        {loading ? (
                            <Spinner size='md' emptyColor='gray.200' color='blue.500' speed='0.65s' />
                        ) : error ? (
                            <ErrorMessage />
                        ) : (
                            <TabContent type={tab} data={data} />
                                    
                        )}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}
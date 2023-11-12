import { Card, CardFooter, ButtonGroup, Button, Divider, Heading, Stack, Image, Text, Box } from '@chakra-ui/react'
import React from 'react'
import { Edge } from '../../types/Types'
import { ContentBody } from './ContentBody'
import { DownloadIcon, LinkIcon } from '@chakra-ui/icons'

type IContentCardProps = {
    data: Edge
    type: string
}
export const ContentCard = (props: IContentCardProps) => {
    const {data, type} = props
    return (
    <Card w='sm' mt='2' mb='2'>
        <ContentBody type={type} data={data} />    
        <Divider />
        <CardFooter>
            <Box p='2'>
                <ButtonGroup spacing='2'>
                    <Button title='Share'><LinkIcon /></Button>
                    <Button title='Download'><DownloadIcon /></Button>
                </ButtonGroup>
            </Box>
        </CardFooter>
    </Card>
    )
}
import { Card, CardBody, CardFooter, ButtonGroup, Button, Divider, Heading, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Edge } from '../../types/Types'
import { ContentBody } from './ContentBody'

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
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Add to cart
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    )
}
import { Card, CardBody, CardFooter, ButtonGroup, Button, Divider, Heading, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Edge } from '../../types/Types'

type IContentCardProps = {
    data: Edge
}
export const ContentCard = (props: IContentCardProps) => {
    const {data} = props
    return (
    <Card w='sm' mt='2' mb='2'>
        <CardBody>
            <Image
            src={data.image.uri}
            alt='Green double couch with wooden legs'
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{data.name}</Heading>
                <Text>
                {data.name}      
                </Text>
                    {data?.experts?.map((expert) => {
                        return (
                        
                            <Text color='blue.600' fontSize='2xl' pr='2'>
                                {expert.firstName} {expert.lastName}
                            </Text>
                    )
                })}
            </Stack>
        </CardBody>
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
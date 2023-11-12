import React from 'react'
import { ContentType } from '../../types/queryFragments'
import { AspectRatio, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'


const EbookComponent = (props: any) => {
    const data = props.data
    return (
        <div>

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
            <div>
                
                {data?.experts?.map((expert: any) => {
                    return (
                        <Text>
                            {expert.lastName}, {expert.firstName}
                        </Text>
                    )
                })}
            </div>
            </Stack>
        </CardBody>    
        </div>
    )
}
const PodcastComponent = (props: any) => {
    const data = props.data
    return (
        <div>
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
            <div>
                
                {data?.experts?.map((expert: any) => {
                    return (
                        <Text>
                            {expert.lastName}, {expert.firstName}
                        </Text>
                    )
                })}
            </div>
            </Stack>
        </CardBody>    
        </div>
    )
}
const EventComponent = (props: any) => {
    const data = props.data
    return (

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
            <div>
                <Text>isOnline: {data.isOnline ? 'Yes' : 'No'}</Text>
                <Text>Location: {data.location}</Text>
                <Text>Organisation: {data.organisation}</Text>
            </div>
            </Stack>
        </CardBody> 
    )
}
const ExpertComponent = (props: any) => {
    const data = props.data
    return (
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
                <div>
                    <Text>{data.title}</Text>
                    <Text>{data.firstName}</Text>
                    <Text>{data.lastName}</Text>
                </div>
            </Stack>
        </CardBody> 
    )
}

const StreamComponent = (props: any) => {
    const data = props.data
    return (
        <CardBody>
        <AspectRatio maxW='560px' ratio={1}>
          <iframe
            title='naruto'
            src={data?.video?.url}
            allowFullScreen
          />
        </AspectRatio>
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{data.name}</Heading>
                <Text>
                {data.name}      
                </Text>
                <div>
                    <Text>Channel: {data.channel}</Text>
                    <Text>Organisation: {data.organisation}</Text>
                </div>
            </Stack>
        </CardBody> 
    )
}
export const ContentBody = (props: any) => {
    const { data, type } = props
    return (
        <div>
            {type === ContentType.EBOOK ? (
                <EbookComponent data={data} />
            ) : type === ContentType.PODCAST ? (
                <PodcastComponent data={data}/>
            ) : type === ContentType.EVENT ? (
                <EventComponent data={data} />
            ) : type === ContentType.EXPERT ? (
                <ExpertComponent data={data} />            
            ) : type === ContentType.STREAM ? (
                <StreamComponent data={data} />
            ) : (
                null                        
            )} 
        </div>
    )
}
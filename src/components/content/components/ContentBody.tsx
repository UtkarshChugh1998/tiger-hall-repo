import React from 'react'
import { ContentType } from '../../types/queryFragments'
import {
  AspectRatio,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

const EbookComponent = (props: any) => {
  const data = props.data
  return (
    <div>
      <CardBody role="card">
        <Image
          width="375px"
          height="200px"
          src={data.image.uri}
          alt={data.image.alt}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.name}</Heading>
          <Text>{data.name}</Text>
          <div>
            {' '}
            By:
            {data?.experts?.map((expert: any, index: number) => {
              return (
                <Text key={index}>
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
      <CardBody role="card">
        <Image
          width="375px"
          height="200px"
          objectFit="cover"
          src={data.image.uri}
          alt={data.image.alt}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.name}</Heading>
          <Text>{data.name}</Text>
          <div>
            {' '}
            By:
            {data?.experts?.map((expert: any, index: number) => {
              return (
                <Text key={index}>
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
    <CardBody role="card">
      <Image
        width="375px"
        height="200px"
        objectFit="cover"
        src={data.image.uri}
        alt={data.image.alt}
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">{data.name}</Heading>
        <Text>{data.name}</Text>
        <div>
          <Text>isOnline: {data.isOnline ? 'Yes' : 'No'}</Text>
          <Text>Location: {data.location || 'N/A'}</Text>
          <Text>Organisation: {data.organisation || 'N/A'}</Text>
        </div>
      </Stack>
    </CardBody>
  )
}
const ExpertComponent = (props: any) => {
  const data = props.data
  return (
    <CardBody role="card">
      <Image
        width="375px"
        height="200px"
        objectFit="cover"
        src={data.image.uri}
        alt={data.image.alt}
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">{data.name}</Heading>
        <Text>{data.name}</Text>
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
    <CardBody role="card">
      <AspectRatio maxW="560px" ratio={1}>
        <iframe title="naruto" src={data?.video?.url} allowFullScreen />
      </AspectRatio>
      <Stack mt="6" spacing="3">
        <Heading size="md">{data.name}</Heading>
        <Text>{data.name}</Text>
        <div>
          <Text>Channel: {data.channel}</Text>
          <Text>Organisation: {data.organisation}</Text>
        </div>
      </Stack>
    </CardBody>
  )
}

const LearningPathComponent = (props: any) => {
  const data = props.data
  return (
    <CardBody role="card">
      <Image
        width="375px"
        height="200px"
        objectFit="cover"
        src={data.image.uri}
        alt={data.image.alt}
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">{data.name}</Heading>
        <Text>{data.name}</Text>
        <div>
          <Text>
            Featured Life Goal: {data?.featuredLifegoal?.name || 'N/A'}
          </Text>
        </div>
      </Stack>
    </CardBody>
  )
}
export const ContentBody = (props: any) => {
  const { data, type } = props
  //   const imageUri: string = data?.image?.uri
  // const idx = imageUri.indexOf('.io') + 3
  // const effectiveUri = imageUri.substring(0, idx) + '/resize/400x' + imageUri.substring(idx)
  // const effectiveData = {...data, image: {...data.image, uri: effectiveUri}}
  return (
    <div>
      {type === ContentType.EBOOK ? (
        <EbookComponent data={data} />
      ) : type === ContentType.PODCAST ? (
        <PodcastComponent data={data} />
      ) : type === ContentType.EVENT ? (
        <EventComponent data={data} />
      ) : type === ContentType.EXPERT ? (
        <ExpertComponent data={data} />
      ) : type === ContentType.STREAM ? (
        <StreamComponent data={data} />
      ) : type === ContentType.LEARNING_PATH ? (
        <LearningPathComponent data={data} />
      ) : null}
    </div>
  )
}

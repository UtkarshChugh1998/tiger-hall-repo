export interface Edge {
    name: string
    image: Image
}

type Image = {
    uri: string
}
type Category =  {
    name: string
}
export type Expert =  {
    firstName: string
    lastName: string
    title: string
    company: string
    isMentor: boolean
    image: Image
}
export interface IPodcast extends Edge{
    categories: Category[]
    experts: Expert[]
}
export interface IEbook extends Edge {
    categories: Category[]
    experts: Expert[]
}
export interface IEvent extends Edge {
    isOnline: boolean
    location: Location
    organisation: Organisation
}
export interface IStream extends Edge {
    channel: string
    organisation: Organisation
    video: StreamMedia
}

type StreamMedia = {
    language: string
    url: string
    length: string
    publishedAt: string
} 

type Location = {
    city: string
}
type Organisation = {
    name: string
}
type MetaData = {
    limit: number
    recommendationId: string
    total: number
}
export type EdgeType = (IPodcast | IEvent | IEbook)
export type ContentCards = {
    edges: EdgeType[]
    metaData: MetaData
}
type ResponseData = {
    contentCards: ContentCards
}
export type Error = {
    message: string
    path: any[]
}
export type ResponseType = {
    data: ResponseData,
    errors: Error[]
}

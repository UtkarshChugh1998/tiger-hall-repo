export interface Edge {
    name: string
    image: Image
    categories: Category[]
    experts: Expert[]
}
type Image = {
    uri: string
}
type Category =  {
    name: string
}
type Expert =  {
    firstName: string
    lastName: string
    title: string
    company: string
}
export interface Podcast extends Edge{

}
type MetaData = {
    limit: number
    recommendationId: string
    total: number
}

export type ContentCards = {
    edges: Edge[]
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

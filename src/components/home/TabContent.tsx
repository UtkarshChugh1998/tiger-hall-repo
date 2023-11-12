import React from 'react'
import { Content } from '../content/components/Content'
import { ResponseType } from '../types/Types'

type ITabContent = {
    data: ResponseType
    type: string
}
export const TabContent = (props: ITabContent) => {
    const {type, data} = props
    return (
        <Content type={type} data={data?.data?.contentCards} error={data?.errors} />
    )
}
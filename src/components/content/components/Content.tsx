import React from 'react'
import { ContentCards, Error } from '../../types/Types'
import { ContentCard } from './ContentCard'
import '../styles/styles.css'
import { ErrorMessage } from '../../common/ErrorMessage'
type IContentProps = {
    data?: ContentCards
    type: string
    error: Error[]
}
export const Content = (props: IContentProps) => {
    const {data, error} = props
    return (
        <div className='contentContainer'>

            {error?.map((err) => (
                <ErrorMessage error={err.message} />
            ))}
            {data?.edges?.map((edge) => {
                return (<ContentCard data={edge} />)
            })}
        </div>
    )
}
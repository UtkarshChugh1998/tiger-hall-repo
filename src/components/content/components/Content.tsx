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
  const { data, type, error } = props
  return (
    <div className="contentContainer">
      {error && error.length > 0 && <ErrorMessage error={error[0].message} />}
      {data?.edges?.map((edge, index) => {
        return <ContentCard key={index} data={edge} type={type} />
      })}
    </div>
  )
}

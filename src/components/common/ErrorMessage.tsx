import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

export const ErrorMessage = (props: any) => {
  const error: string = props.error
  return (
    <Alert borderRadius="5px" status="error" w="400px" color="black">
      <AlertIcon />
      {error.toUpperCase()}
    </Alert>
  )
}

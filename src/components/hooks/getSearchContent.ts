import {
  ContentType,
  FilterContentType,
  ebookFragment,
  eventFragment,
  expertFragment,
  fragmentDef1,
  fragmentDef,
  fragmentDef2,
  learningPathFragment,
  podcastFragment,
  streamFragment,
} from '../types/queryFragments'

export const getSearchContent = (
  searchVal: string,
  tabVal: string,
  setData: Function,
  setLoading: Function,
  setError: Function,
) => {
  setLoading(true)
  let subQuery = ''
  let fragmentDefinition = ''
  let filterContentType = FilterContentType.PODCAST
  switch (tabVal) {
    case ContentType.EBOOK: {
      subQuery = ebookFragment()
      fragmentDefinition = fragmentDef
      filterContentType = FilterContentType.EBOOK
      break
    }
    case ContentType.PODCAST: {
      subQuery = podcastFragment()
      fragmentDefinition = fragmentDef
      filterContentType = FilterContentType.PODCAST
      break
    }
    case ContentType.EVENT: {
      subQuery = eventFragment()
      fragmentDefinition = fragmentDef1
      filterContentType = FilterContentType.EVENT
      break
    }
    case ContentType.EXPERT: {
      subQuery = expertFragment()
      fragmentDefinition = fragmentDef1
      filterContentType = FilterContentType.EXPERT
      break
    }
    case ContentType.STREAM: {
      subQuery = streamFragment()
      fragmentDefinition = fragmentDef2
      filterContentType = FilterContentType.STREAM
      break
    }
    case ContentType.LEARNING_PATH: {
      subQuery = learningPathFragment()
      filterContentType = FilterContentType.LEARNING_PATH
      break
    }
  }
  const query = `{
        contentCards(filter: {limit: 20, keywords: , "${searchVal}", types: [${filterContentType}]}) {
            meta {
                total
                recommendationId
                limit
            }
           ${subQuery}
        }
       }
       ${fragmentDefinition}`
  return fetch('https://api.tigerhall.net/v2/', {
    method: 'POST',
    body: JSON.stringify({
      query,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (res) => {
      const response = await res.json()
      setData(response)
      setLoading(false)
    })
    .catch((e: any) => {
      console.log('Error ', e)
      setError(e.message)
    })
}

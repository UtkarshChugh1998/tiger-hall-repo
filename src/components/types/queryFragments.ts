export enum ContentType {
    EBOOK = 'Ebook',
    PODCAST = 'Podcast',
    EVENT = 'Event',
    EXPERT = 'Expert',
    STREAM = 'Stream',
    LEARNING_PATH = 'LearningPath',
    CATEGORY = 'Category',
    LIFE_GOAL = 'LifeGoal'


}
export enum FilterContentType {
    EBOOK = 'EBOOK',
    PODCAST = 'PODCAST',
    EVENT = 'EVENT',
    EXPERT = 'EXPERT',
    STREAM = 'STREAM',
    LEARNING_PATH = 'LEARNING_PATH',
    CATEGORY = 'CATEGORY',
    LIFE_GOAL = 'LIFE_GOAL'

}
export const ebookFragment = () => {
    return `
    edges {
        ... on Ebook {
            name
            image {
                ...Image
            }
            categories {
                ...Category
            }
            experts {
                ...Expert
            }
        }
    }`
}
export const fragmentDef = `
    fragment Image on Image{
        uri
    }
    fragment Category on Category {
        name
    }
    fragment Expert on Expert {
        firstName
        lastName
        title
        company
}`
export const podcastFragment = () => {
    return `
    edges {
        ... on Podcast {
            name
            image {
                ...Image
            }
            categories {
                ...Category
            }
            experts {
                ...Expert
            }
        }
    }`
}
export const eventFragment = () => {
    return `
    edges {
        ... on Event {
            name
            isOnline
            image {
                ...Image
            }
            location {
                city
            }
            organisation {
                name
            }
        }
    }`
}
export const fragmentDef1 = `
    fragment Image on Image{
        uri
    }`

export const expertFragment = () => {
    return `
    edges {
        ... on Expert {
            firstName
            lastName
            isMentor
            image {
                ...Image
            }
        }
    }`
}

export const streamFragment = () => {
    return `
    edges {
        ... on Stream {
            name
            image {
                ...Image
            }
            channel
            organisation {
              name
            }
            video {
                ...Video
            }
        }
    }`
}

export const fragmentDef2 = `
    fragment Image on Image{
        uri
    }
    fragment Video on StreamMedia{
        language
        url
        length
        publishedAt
    }
`

export const learningPathFragment = () => {
    return `
    edges {
        ... on LearningPath {
            name
            image {
                ...Image
            }
            isOnline
            location {
                city
            }
            organisation {
                name
            }
        }
    }`
}

export const categoryFragment = () => {
    return `
    edges {
        ... on Category {
            name
            image {
                ...Image
            }
            isOnline
            location {
                city
            }
            organisation {
                name
            }
        }
    }`
}

export const lifeGoalFragment = () => {
    return `
    edges {
        ... on LifeGoal {
            name
            image {
                ...Image
            }
            isOnline
            location {
                city
            }
            organisation {
                name
            }
        }
    }`
}


import { useState, useEffect } from 'react'
import youtube from '../api/youtube'

const useVideos = (defaultSearchTerm) => {
// goal for this custom hook:
    // app will provide inputs (search term) 
    // we return list of videos and function to get videos

    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        setVideos(response.data.items)
        // setSelectedVideos(response.data.items[0])
    } 

    return [ videos, search ]
    // React community will usually return an ARRAY
    // JS community will return an OBJECT

}

export default useVideos
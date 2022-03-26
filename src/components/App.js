import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {

    // Some notes on turning these pieces of state and 2 functions into a custom hook (aka why its all commented out):
    // Firstly: We are managing 2 pieces of state and functions that relate to those
    // What is the inputs? TECHNICALLY - only 'buildings'
    // What are outputs (aka elements that we make use of elsewhere in the component)? 
        // a function to serach for videos & a list of videos

    // const [ videos, setVideos ] = useState([])
    // managing list of videos
    const [ selectedVideos, setSelectedVideos ] = useState(null)
    // managing a certain selected video

    // useEffect(() => {
    //     onTermSubmit('buildings')
    // }, [])

    // const onTermSubmit = async (term) => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     })
    //     setVideos(response.data.items)
    //     setSelectedVideos(response.data.items[0])
    // } 

    //when refactoring, if you have a single line function, it is usually best practice
    // to just use this function in line 
    // const onVideoSelect = (video) => {
    //     setSelectedVideos(video)
    // }

    //deconstructing the returned values from this custom hook
    const [ videos, search ] = useVideos('buildings')

    useEffect(() => {
        //as you see in line 31ish, we still need to set a default selectedVideo for when the page initally renders
        setSelectedVideos(videos[0])
    }, [videos])
        // and then still have the page re-render every time the list of videos changes

    return(
        <div className='ui container'> 
            <SearchBar onFormSubmit={ search }/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={ selectedVideos } />
                    </div>
                    <div className='five wide column'>
                        <VideoList 
                            // this below is exactly the same as what it commented out below it
                            onVideoSelect={setSelectedVideos}
                            // onVideoSelect={ video => setSelectedVideos(video) } 
                            videos={ videos }
                        />
                    </div>                    
                </div>
            </div>
            
        </div>
    )
}

// class App extends React.Component {

//     state = { videos: [], selectedVideo: null }

//     componentDidMount() {
//         this.onTermSubmit('buildings')
//     }
    
//    onTermSubmit = async (term) => {
//        const response = await youtube.get('/search', {
//            params: {
//                q: term
//            }
//        })
//        this.setState({ 
//            videos: response.data.items,
//            selectedVideo: response.data.items[0]
//         })
//    } 

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video })
//     }

//     render(){
//         return(
//             <div className='ui container'> 
//                 <SearchBar onFormSubmit={ this.onTermSubmit }/>
//                 <div className='ui grid'>
//                     <div className='ui row'>
//                         <div className='eleven wide column'>
//                             <VideoDetail video={ this.state.selectedVideo } />
//                         </div>
//                         <div className='five wide column'>
//                             <VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos }/>
//                         </div>                    
//                     </div>
//                 </div>
                
//             </div>
//         )
//     }
// }
    

export default App
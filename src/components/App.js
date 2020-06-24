import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

const KEY = "AIzaSyCSQ0PdHbrlg6X2Ex2DE0DYy-EPFtaTW7s"

class App extends React.Component{
    state = { videos: [] }
    
    onSearchSubmit = async (searchTerm) =>{
       const response = await youtube.get('/search', {
            params:{
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: searchTerm
            }
        })
        this.setState({videos:response.data.items})
    }

    render() {
        return (
            <div className= 'ui container'>
            <SearchBar onSearchTermSubmit={this.onSearchSubmit}/>
            <VideoList videos = {this.state.videos}/>
            </div>
        )
    }
}

export default App
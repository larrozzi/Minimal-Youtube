import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

// const KEY = "AIzaSyBfYh1Wc06bmyAwMltlPdFrziVR10hnCdo"
const KEY = "AIzaSyCSQ0PdHbrlg6X2Ex2DE0DYy-EPFtaTW7s"
class App extends React.Component{
    state = { videos: [], selectedVideo: null }
    
    componentDidMount(){
        //this.onFirstOpen()
        this.onSearchSubmit('')
    }
    //to implement later for optimization
    // onFirstOpen = async () =>{
    //     const response = await youtube.get('/guideCategories', {
    //          params:{
    //              part: 'snippet',
    //              regionCode:"CA",
    //              key: KEY
    //          }
    //      })
    //      this.setState({
    //          videos:response.data.items,
    //          selectedVideo:response.data.items[0]
    //      })
    //  }
 
    onSearchSubmit = async (searchTerm) =>{
       const response = await youtube.get('/search', {
            params:{
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: searchTerm
            }
        })
        //console.log(response);
        
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }

   

    onVideoSelect = (video) => {
       // console.log('From the App', video)
       this.setState({selectedVideo: video})
    }

  
    render() {
        return (
            <div className= 'ui container'>
                <SearchBar className="search" onSearchTermSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className= "ui row">
                        <div className="eleven wide column">
                            <VideoDetail video= {this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect= {this.onVideoSelect} videos  = {this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
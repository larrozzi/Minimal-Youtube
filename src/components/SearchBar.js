import React from 'react'

class SearchBar extends React.Component{
    state = {searchTerm: ''};

    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    onFormSubmit = (event) =>{ 
        event.preventDefault()

        this.props.onSearchTermSubmit(this.state.searchTerm)
    }
    render (){
        return (
            <div className="search-bar ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label className="header">Minimalistic YouTube
                        </label>
                        <input 
                            type ="text"    
                            placeholder= "Search"
                            value={this.state.searchTerm} 
                            onChange={this.onInputChange}
                            />
                    </div>
                </form> 
            
            </div>
        )
    }
}

export default SearchBar
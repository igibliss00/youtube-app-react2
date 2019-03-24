import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value 
        })
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="videoSearch">Video Search</label>
                        <input 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            type="text" 
                            id="videoSearch"
                            autoFocus
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
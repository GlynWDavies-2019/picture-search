import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'Default' };
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Picture Search</label>
                        <input 
                            type="text"
                            value={this.state.term} 
                            onChange={ (e) => this.setState({ term: e.target.value }) } 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
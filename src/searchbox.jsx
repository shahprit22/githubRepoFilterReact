import React, {Component} from "react";
class SearchBox extends Component {
    state = {  }
    render() { 
        return ( 
            <input type="text" placeholder="...Search" onChange={this.props.handleSearch}/>
         );
    }
}
 
export default SearchBox;
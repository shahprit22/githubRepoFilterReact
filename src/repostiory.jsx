import React, {Component} from "react";
import axios from 'axios';
import SearchBox from "./searchbox";

class Repository extends Component {
    state = { 
        content:[],
        searchValue:"",
        contentfilter:[]
     }

    componentDidMount(){
        const url = `https://api.github.com/users/${this.props.userName}/repos` 
        axios.get(url)
        .then(response => this.setState({content : response.data, error:null, contentfilter : response.data}))
        .catch(error => this.setState({error}))
    }
    componentDidUpdate(prevState){
        if(prevState.userName!==this.props.userName){
        const url = `https://api.github.com/users/${this.props.userName}/repos` 
        axios.get(url)
        .then(response => this.setState({content : response.data, error: null, contentfilter:response.data}))
        .catch(error => this.setState({error}))
        }
    }

    handleSearch = (e) => {
        var {content} = this.state
        var contentfilter = content.filter(c => c.name.toLowerCase().startsWith(e.currentTarget.value.toLowerCase()))
        this.setState({contentfilter, searchValue:e.currentTarget.value.toLowerCase()}, () => {
            if(this.state.searchValue===""){
                    this.setState({contentfilter:content})
            }
        })
    }
    render() { 
        const {error,contentfilter} = this.state
        return ( 
            <React.Fragment>
                <h1>Welcome {this.props.userName}</h1>
                {error ? <h1>Please enter valid username</h1> : 
                <>
                    <SearchBox handleSearch={this.handleSearch}/>
                    <ul>
                        {contentfilter.map(c => <li key={c.id}>{c.name}</li>)}
                    </ul>
                </>
                }
            </React.Fragment>
         );
    }
}
 
export default Repository;
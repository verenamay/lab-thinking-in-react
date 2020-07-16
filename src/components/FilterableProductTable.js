import React, { Component } from 'react'; 
import SearchBar from './SearchBar'; 
import ProductTable from './ProductTable'; 
import ProductRow from './ProductRow'; 
import data from '../data.json'; 


class FilterableProductTable extends Component {
    // const {data:products} = data
    state={
        products: data.data,
        query:''
    }
    setQuery = query => {
        this.setState({
            query: query
        })

    console.log("this is the query state", this.state.query);
    }
    render(){
         return(
        <div className="App">
        <h1>IronStore</h1>
            <div className="SearchBar">
                <SearchBar query={this.state.query} setQuery={this.setQuery} />
            </div>

            <div className="ProductTable">
                <ProductTable products={this.state.products} query={this.state.query}/>
                <div className="ProductRow"></div>
            </div>
            
        </div>
        )        
    }
}

export default FilterableProductTable; 
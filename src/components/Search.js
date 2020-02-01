import React, { Component } from 'react';
//cc escribir para generar este esqueleto
class Search extends Component {

    searchRef=React.createRef();

    HandleData=(e)=>{
            e.preventDefault();
            const term=this.searchRef.current.value;
            this.props.DataSearch(term);
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <form onSubmit={this.HandleData}>
                <div className="row">
                    
                    <div className="form-group col-md-8">
                        <input type="text" ref={this.searchRef} className="form-control form-control-lg" placeholder="Search your image!!"/>

                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"  value="Search.."/>

                    </div>
                </div>
            </form>
        );
    }
}

export default Search;
import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class Answer extends Component {
    ShowImages=()=>{
        const images=this.props.images;
        if(this.props.term.length === 0) return null;
       
        return (<React.Fragment>
            <div className="col-12 p-5 row">
            {
                images.map( image => (
                    <Image  key={image.id} image={image}/>
                ))
            }
            </div>
            <Pagination pagePrev={this.props.pagePrev} pageNext={this.props.pageNext}/>
        </React.Fragment>)
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
            {this.ShowImages()}
            </React.Fragment>
        );
    }
}

export default Answer;
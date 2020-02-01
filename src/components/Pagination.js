import React from 'react';

const Pagination = (props) => {


    return (
        <div className="py-3">
            <button type="button" onClick={props.pagePrev} className="btn btn-info mr-1"> Preview! </button>
            <button type="button" onClick={props.pageNext} className="btn btn-info"> Next! </button>
                     
         </div>
            
    )

}

export default Pagination;
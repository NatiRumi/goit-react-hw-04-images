import React from 'react';
import { Component } from 'react';
import { Blocks } from 'react-loader-spinner';

class Loader extends Component {
    render() {
        return(
            <div>
            <Blocks
              visible={true}
              height="40"
              width="40"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          </div>
        )
    }
}

export default Loader;
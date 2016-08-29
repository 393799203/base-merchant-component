import React from 'react';
import { AddressEditor }  from '../../../lib/index.js';

var data = {province:'',city:'',area:''}
export default React.createClass({
	
    render(){
        return(
            <div>
                <AddressEditor />
            {/*<AddressEditor  data = {'123'} province={state.province} city={state.city} area={state.area} />*/}
            </div>
        );
    }
});

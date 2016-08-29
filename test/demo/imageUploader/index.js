import React from 'react';
import { ImageUploader }  from 'module_path/index';

/*参数说明 
params  | 说明 | 备注
-------|-----|----
value| {string}| 初始化时候的图片url
*/

var img = 'http://s17.mogucdn.com/p1/160805/idid_ie3tkyjyhe2dgmbtmezdambqgayde_100x100.jpg'
export default React.createClass({
handleUploadImg(url) {
	console.log('url'),url
},
    render(){
        return(
            <div>
                <ImageUploader value={img} onChange={this.handleUploadImg }  />
            </div>
        );
    }
});

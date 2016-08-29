import React from 'react';
//import { ImageSlide }  from 'module_path/index';
var ImageSlide = require('../../../lib/imageSlide/index')
export default React.createClass({
	handleChange(index){
		// console.info(index);
	},

    render(){
    	var bannerData = [
    		{href:"http://www.mogujie.com/",src:"http://s17.mogucdn.com/p1/160813/idid_ie4deyrwhbstkyjvmezdambqgiyde_300x200.jpg"},
            {href:"http://www.mogujie.com/",src:"http://s17.mogucdn.com/p1/160813/idid_ie4dknjtgztdkyjvmezdambqgiyde_300x200.jpg"},
    		{href:"http://www.mogujie.com/",src:"http://s17.mogucdn.com/p1/160813/idid_ie3tqzbvmntdkyjvmezdambqgayde_300x200.jpg"},
    	];

        return(
            <div>
                <ImageSlide width='300' height='200' index={0} auto={true} isShowDot={true} isShowPrevNext={bannerData.length > 1} handleChangeStart={this.handleChange}>
	                {bannerData.map(function (banner, i) {
	                    return (
	                        <a key={i} href={banner.href} target="_blank">
	                            <img src={banner.src} width="300px" height="200px"/>
	                        </a>
	                    )
	                })}
                </ImageSlide>
            </div>
        );
    }
});

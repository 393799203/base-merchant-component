import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import ImageUploader from 'source_path/image-uploader';

describe('Image Uploader Component', () => {
    let upload = {};
    upload = {
        before: (files) => {
            console.log('before', files);
        },
        progress: (e, file, xhr) => {

        },
        success: (list) => {

        },
        fail: (list) => {

        },
        finish: (list) => {

        }
    };

    beforeAll(() => {
        spyOn(upload, 'before');
        spyOn(upload, 'progress');
        spyOn(upload, 'success');
        spyOn(upload, 'fail');
        spyOn(upload, 'finish');
    }); 
    
    it('single image upload', () => {
        const wrapper = shallow(
            <ImageUploader
                before={upload.before}
                progress={(e, file, xhr) => upload.progress(e, file, xhr)}
                success={(a) => upload.success(a)}
                fail={upload.fail}
                finish={upload.finish}
            />
        );

        wrapper.find('input[type="file"]').simulate('change', {
            target: {
                files: {
                    0: {
                        name: 'beauty.png',
                        size: 1045580
                    },
                    length: 1
                }
            }
        });

        expect(upload.before).toHaveBeenCalled();
        expect(upload.fail).toHaveBeenCalled();
        expect(upload.finish).toHaveBeenCalled();
    });

    it('mutiple image upload', () => {

    });
});

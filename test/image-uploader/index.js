/* eslint-disable */
import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import ImageUploader from 'source_path/image-uploader';

describe('Image Uploader Component', () => {
    let upload = {};
    let wrapper;

    beforeEach(() => {
        upload = {
            before: (files) => {
                console.log('before', files);
            },
            progress: (e, file, xhr) => {

            },
            success: (list) => {
            },
            fail: (list) => {
                console.log('失败', list);
            },
            finish: (list) => {
                console.log('完成');
            }
        };

        sinon.spy(upload, 'before');
        sinon.spy(upload, 'progress');
        sinon.spy(upload, 'success');
        sinon.spy(upload, 'fail');
        sinon.spy(upload, 'finish');
    });

    it('single image upload', () => {
        const wrapper = mount(
            <ImageUploader
                before={() => upload.before()}
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

        expect(upload.before.called).to.be.true;
        expect(upload.fail.called).to.be.true;
    });
});
/* eslint-enable */

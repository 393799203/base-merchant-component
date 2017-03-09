/* eslint-disable */
import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import ImageUploader from 'source_path/image-uploader';

const resp = {
    "status": {
        "code": 1001,
        "msg": "正常"
    },
    "result": {
        "path": "/p2/170308/105897972_19ei2k8deb9k1i1k5ge02f3ab8ee6_1920x1200.jpg",
        "url": "http://s2.mogucdn.com/p2/170308/105897972_19ei2k8deb9k1i1k5ge02f3ab8ee6_1920x1200.jpg",
        "mediaId": "11qoiwsg"
    }
};

const file = {
    target: {
        files: {
            0: {
                name: 'beauty.png',
                size: 1045580
            },
            length: 1
        }
    }
};

const fileList = {
    target: {
        files: {
            0: {
                name: 'beauty.png',
                size: 1045580
            },
            1: {
                name: 'ziyi.png',
                size: 3215681
            },
            length: 2
        }
    }
}

let upload = {};
let wrapper;
let instance;

describe('Image Uploader Component', () => {
    describe('single image upload failed', function () {
        before(function (done) {
            upload = {
                before: (files) => {
                    console.log('before', files);
                },
                progress: (e, file, xhr) => {

                },
                success: (list) => {
                    console.log('成功', list);
                },
                fail: (list) => {
                    console.log('失败', list);
                },
                finish: (list) => {
                    console.log('完成');
                    done();
                }
            };

            sinon.spy(upload, 'before');
            sinon.spy(upload, 'progress');
            sinon.spy(upload, 'success');
            sinon.spy(upload, 'fail');
            sinon.spy(upload, 'finish');

            wrapper = shallow(
                <ImageUploader
                    before={upload.before}
                    progress={(e, file, xhr) => upload.progress(e, file, xhr)}
                    success={(a) => upload.success(a)}
                    fail={upload.fail}
                    finish={upload.finish}
                />
            );

            wrapper.find('input[type="file"]').simulate('change', file);
        });

        it('single image upload fail', () => {
            expect(upload.before.called).to.be.true;
            expect(upload.fail.called).to.be.true;
            expect(upload.fail.args[0]).to.have.lengthOf(2);
            expect(upload.finish.called).to.be.true;
            expect(wrapper.find('.add-file-btn').exists()).to.be.true;
        });
    });

    describe('single image upload success', function () {
        before((done) => {
            upload = {
                before: (files) => {
                    console.log('before', files);
                },
                progress: (e, file, xhr) => {

                },
                success: (list) => {
                    console.log('成功', list[0]);
                },
                fail: (list) => {
                    console.log('失败', list);
                },
                finish: (list) => {
                    console.log('完成');
                    done();
                }
            };

            sinon.spy(upload, 'before');
            sinon.spy(upload, 'progress');
            sinon.spy(upload, 'success');
            sinon.spy(upload, 'fail');
            sinon.spy(upload, 'finish');

            sinon.stub(ImageUploader.prototype, 'uploadFile').returns(new Promise((resolve) => {
                resolve(resp.result);
            }));

            wrapper = shallow(
                <ImageUploader
                    type='raw'
                    before={upload.before}
                    progress={(e, file, xhr) => upload.progress(e, file, xhr)}
                    success={upload.success}
                    fail={upload.fail}
                    finish={upload.finish}
                />
            );

            wrapper.find('input[type="file"]').simulate('change', file);
        });

        after(() => {
            ImageUploader.prototype.uploadFile.restore();
        });

        it('single image upload success', () => {
            expect(wrapper.hasClass('mc-image-uploader')).to.be.false;
            expect(wrapper.find('.add-file-btn').exists()).to.be.false;
            expect(upload.success.called).to.be.true;
            expect(upload.success.getCall(0).args[0]).to.deep.equal([resp.result]);
        });
    });

    describe('no before upload validate function', function () {
        before(() => {
            sinon.spy(ImageUploader.prototype, 'start');

            wrapper = shallow(
                <ImageUploader />
            );

            wrapper.find('input[type="file"]').simulate('change', file);
        });

        after(() => {
            ImageUploader.prototype.start.restore();
        });

        it('sync before upload validate', () => {
            expect(ImageUploader.prototype.start.called).to.be.true;
        });
    });

    describe('sync before upload validate fail', function () {
        before(() => {
            upload = {
                before: (files) => {
                    console.log('before', files);
                    return false;
                }
            };

            sinon.spy(upload, 'before');
            sinon.spy(ImageUploader.prototype, 'start');

            wrapper = shallow(
                <ImageUploader before={upload.before} />
            );

            wrapper.find('input[type="file"]').simulate('change', file);
        });

        after(() => {
            ImageUploader.prototype.start.restore();
        });

        it('sync before upload validate', () => {
            expect(upload.before.called).to.be.true;
            expect(ImageUploader.prototype.start.called).to.be.false;
        });
    });

    describe('async before upload validate fail', function () {
        before((done) => {
            upload = {
                before: (files) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(function () {
                            reject();
                            done();
                        });
                    });
                }
            };

            sinon.stub(upload, 'before', upload.before);
            sinon.spy(ImageUploader.prototype, 'start');

            wrapper = shallow(
                <ImageUploader before={upload.before} />
            );

            wrapper.find('input[type="file"]').simulate('change', file);
        });

        after(() => {
            ImageUploader.prototype.start.restore();
        });

        it('async before upload validate', () => {
            expect(upload.before.called).to.be.true;
            expect(ImageUploader.prototype.start.called).to.be.false;
        });
    });

    describe('async before upload validate success', function () {
        before((done) => {
            upload = {
                before: (files) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(function () {
                            resolve();
                            done();
                        });
                    });
                }
            };

            sinon.stub(upload, 'before', upload.before);
            sinon.spy(ImageUploader.prototype, 'start');

            wrapper = shallow(
                <ImageUploader before={upload.before} />
            );

            wrapper.find('input[type="file"]').simulate('change', file);
        });

        after(() => {
            ImageUploader.prototype.start.restore();
        });

        it('async before upload validate success', () => {
            expect(upload.before.called).to.be.true;
            expect(ImageUploader.prototype.start.called).to.be.true;
        });
    });

    describe('multiple image upload success', function () {
        before((done) => {
            upload = {
                before: (files) => {
                    console.log('before', files);
                },
                progress: (e, file, xhr) => {

                },
                singleSuccess: (item) => {
                },
                success: (list) => {
                    console.log('成功', list);
                },
                fail: (list) => {
                    console.log('失败', list);
                },
                finish: (list) => {
                    console.log('完成');
                    done();
                }
            };

            sinon.spy(upload, 'before');
            sinon.spy(upload, 'progress');
            sinon.spy(upload, 'singleSuccess');
            sinon.spy(upload, 'success');
            sinon.spy(upload, 'fail');
            sinon.spy(upload, 'finish');

            sinon.stub(ImageUploader.prototype, 'uploadFile').returns(new Promise((resolve) => {
                resolve(resp.result);
            }));

            sinon.spy(ImageUploader.prototype, 'finish');

            wrapper = mount(
                <ImageUploader
                    inputAttrs={{ multiple: true }}
                    before={upload.before}
                    singleSuccess={upload.singleSuccess}
                    progress={(e, file, xhr) => upload.progress(e, file, xhr)}
                    success={upload.success}
                    fail={upload.fail}
                    finish={upload.finish}
                />
            );

            wrapper.find('input[type="file"]').simulate('change', fileList);
        });

        after(() => {
            ImageUploader.prototype.uploadFile.restore();
            ImageUploader.prototype.finish.restore();
        });

        it('mutiple image upload success', () => {
            expect(ImageUploader.prototype.uploadFile.callCount).to.equal(2);
            expect(upload.singleSuccess.callCount).to.equal(2);
            expect(upload.success.called).to.be.true;
            expect(upload.success.getCall(0).args[0]).to.have.lengthOf(2);
            expect(upload.finish.called).to.be.true;
            expect(ImageUploader.prototype.finish.called).to.be.true;
        });
    });

    describe('multiple image upload success', function () {
        
        before((done) => {
            upload = {
                singleFail: (item) => {
                },
                success: (list) => {
                    console.log('成功', list);
                },
                fail: (list) => {
                    console.log('失败', list);
                },
                finish: (list) => {
                    console.log('完成');
                    done();
                }
            };

            sinon.spy(upload, 'singleFail');
            sinon.spy(upload, 'success');
            sinon.spy(upload, 'fail');
            sinon.spy(upload, 'finish');

            sinon.spy(ImageUploader.prototype, 'uploadFile');
            sinon.spy(ImageUploader.prototype, 'finish');

            wrapper = mount(
                <ImageUploader
                    inputAttrs={{ multiple: true }}
                    singleFail={upload.singleFail}
                    success={upload.success}
                    fail={upload.fail}
                    finish={upload.finish}
                />
            );

            wrapper.find('input[type="file"]').simulate('change', fileList);
        });

        after(() => {
            ImageUploader.prototype.uploadFile.restore();
            ImageUploader.prototype.finish.restore();
        });

        it('mutiple image upload success', () => {
            expect(ImageUploader.prototype.uploadFile.callCount).to.equal(2);
            expect(upload.singleFail.callCount).to.equal(2);
            expect(upload.fail.called).to.be.true;
            expect(upload.fail.getCall(0).args[0]).to.have.lengthOf(2);
            expect(upload.finish.called).to.be.true;
            expect(ImageUploader.prototype.finish.called).to.be.true;
        });
    });
});

/* eslint-disable */
import React, { Component } from 'react';

export default class FormView extends Component {
    render () {
        return (
            <div className='p-t-20 p-l-30 p-r-30 p-b-30'>
                <h3 className='p-t-50 p-b b-b dashed'>
                    {this.props.num || 1}、Form
                    <a
                      className='btn btn-danger-border btn-xs text-thin m-l'
                      href='http://gitlab.mogujie.org/Aveng/meili-merchant-theme/blob/develop/lib/form.less'
                    >
                      查看 Form 样式源码
                    </a>
                </h3>
                <blockquote>
                    组件库中封装了 Field 组件，包括<code>input</code>, <code>select</code>, <code>textarea</code>, <code>checkbox</code>, <code>radio</code>，让 Field 有更多的使用姿势
                    <a href='#/b-field' className='btn btn-info btn-xs m-l'>查看 Field 组件</a>
                    <br/>
                    组件库中封装了 Form 组件，只需要配置数据，就可以生成一个表单
                    <a href='#/a-form' className='btn btn-info-border btn-xs m-l'>查看 Form 组件</a>
                </blockquote>
                <h4>{this.props.num || 1}.1、input, select, textarea 使用方式</h4>
                <blockquote>
                    input, select, textarea 对应的样式分别为<code>.form-input</code> <code>.form-select</code> <code>.form-textarea</code>
                </blockquote>
                <p className='text-bold'>1、输入框</p>
                <div className='form-item'>
                    <input className='form-input input-md w-md' type='text' placeholder='.form-input .input-md' />
                    <input className='form-input w-md m-l-xs' type='text' placeholder='.form-input' />
                    <input className='form-input input-sm w-md m-l-xs' type='text' placeholder='.form-input  .input-sm' />
                    <input className='form-input w-md m-l-xs' type='text' disabled placeholder='disabled' />
                    <input className='form-input w-md success m-l-xs' type='text' placeholder='.form-input  .success' />
                    <input className='form-input w-md warning m-l-xs' type='text' placeholder='.form-input .warning' />
                    <input className='form-input w-md danger m-l-xs' type='text' placeholder='.form-input .danger' />
                </div>
                <pre className='m-t'>
                    <code className='block'>{"<input type='text' className='form-input input-md' />"}</code>
                    <code className='block'>{"<input type='text' className='form-input' />"}</code>
                    <code className='block'>{"<input type='text' className='form-input input-sm' />"}</code>
                    <code className='block'>{"<input type='text' className='form-input' disabled />"}</code>
                    <code className='block'>{"<input type='text' className='form-input success' />"}</code>
                    <code className='block'>{"<input type='text' className='form-input warning' />"}</code>
                    <code className='block'>{"<input type='text' className='form-input danger' />"}</code>
                </pre>
                <p className='text-bold'>2、选择框</p>
                <div className='form-item'>
                    <select className='form-select w select-md'>
                        <option value=''>－ 请选择 －</option>
                    </select>
                    <select className='form-select w m-l'>
                        <option value=''>－ 请选择 －</option>
                    </select>
                    <select className='form-select w m-l select-sm'>
                        <option value=''>－ 请选择 －</option>
                    </select>
                    <select className='form-select w m-l' disabled>
                        <option value=''>－ 请选择 －</option>
                    </select>
                    <select className='form-select w m-l success'>
                        <option value=''>－ 请选择 －</option>
                    </select>
                    <select className='form-select w m-l warning'>
                        <option value=''>－ 请选择 －</option>
                    </select>
                    <select className='form-select w m-l danger'>
                        <option value=''>－ 请选择 －</option>
                    </select>
                </div>
                <pre className='m-t'>
                    <code className='block'>{"<select className='form-select select-md'>...</select>"}</code>
                    <code className='block'>{"<select className='form-select'>...</select>"}</code>
                    <code className='block'>{"<select className='form-select select-sm'>...</select>"}</code>
                    <code className='block'>{"<select className='form-select' disabled>...</select>"}</code>
                    <code className='block'>{"<select className='form-select success'>...</select>"}</code>
                    <code className='block'>{"<select className='form-select warning'>...</select>"}</code>
                    <code className='block'>{"<select className='form-select danger'>...</select>"}</code>
                </pre>
                <p className='text-bold'>3、文本框</p>
                <div className='form-item'>
                    <textarea className='form-textarea w textarea-md' rows='3'></textarea>
                    <textarea className='form-textarea w m-l' rows='3'></textarea>
                    <textarea className='form-textarea w m-l textarea-sm' rows='3'></textarea>
                    <textarea className='form-textarea w m-l' rows='3' disabled></textarea>
                    <textarea className='form-textarea w m-l success' rows='3'></textarea>
                    <textarea className='form-textarea w m-l warning' rows='3'></textarea>
                    <textarea className='form-textarea w m-l danger' rows='3'></textarea>
                </div>
                <pre className='m-t'>
                    <code className='block'>{"<textarea rows='3' className='form-textarea textarea-md'></textarea>"}</code>
                    <code className='block'>{"<textarea rows='3' className='form-textarea'></textarea>"}</code>
                    <code className='block'>{"<textarea rows='3' className='form-textarea textarea-sm'></textarea>"}</code>
                    <code className='block'>{"<textarea rows='3' className='form-textarea' disabled></textarea>"}</code>
                    <code className='block'>{"<textarea rows='3' className='form-textarea success'></textarea>"}</code>
                    <code className='block'>{"<textarea rows='3' className='form-textarea warning'></textarea>"}</code>
                    <code className='block'>{"<textarea rows='3' className='form-textarea danger'></textarea>"}</code>
                </pre>
                <h4>{this.props.num || 1}.2、radio 使用方式</h4>
                <blockquote>
                    由于浏览器兼容性，checkbox, radio 需要使用多个标签组合才能实现自定义样式
                </blockquote>
                <div className='row'>
                    <div className='col-lg-4 p-n'>
                        <p className='text-bold m-b'>1、默认 radio</p>
                        <div className='form-item'>
                            <label className='form-radio'>
                                <input type='radio' name='radio1' />
                                <span></span> 蘑菇街
                            </label>
                            <label className='form-radio m-l'>
                                <input type='radio' name='radio1' />
                                <span></span> 美丽说
                            </label>
                            <label className='form-radio m-l'>
                                <input type='radio' name='radio1' />
                                <span></span> 淘世界
                            </label>
                        </div>
                        <pre className='m-t'>
                            <code className='block'>{"<label className='form-radio'>"}</code>
                            <code className='block'>{"    <input type='radio' name='radio1'/>"}</code>
                            <code className='block'>{"    <span></span>"}</code>
                            <code className='block'>{"    蘑菇街"}</code>
                            <code className='block'>{"</label>"}</code>
                        </pre>
                    </div>
                    <div className='col-lg-4'>
                        <p className='text-bold m-b'>2、禁用 radio</p>
                        <div className='form-item'>
                            <label className='form-radio disabled'>
                                <input type='radio' name='radio2' disabled />
                                <span></span> 蘑菇街
                            </label>
                            <label className='form-radio m-l disabled'>
                                <input type='radio' name='radio2' disabled />
                                <span></span> 美丽说
                            </label>
                            <label className='form-radio m-l disabled'>
                                <input type='radio' name='radio2' disabled />
                                <span></span> 淘世界
                            </label>
                        </div>
                        <pre className='m-t'>
                            <code className='block'>{"<label className='form-radio disabled'>"}</code>
                            <code className='block'>{"    <input type='radio' name='radio1' disabled />"}</code>
                            <code className='block'>{"    <span></span>"}</code>
                            <code className='block'>{"    蘑菇街"}</code>
                            <code className='block'>{"</label>"}</code>
                        </pre>
                    </div>
                    <div className='col-lg-4'>
                        <p className='text-bold m-b'>3、不同大小 radio <code>.radio-md</code> <code>.radio-sm</code></p>
                        <div className='form-item'>
                            <label className='form-radio radio-md'>
                                <input type='radio' name='radio3' />
                                <span></span> 蘑菇街
                            </label>
                            <label className='form-radio m-l'>
                                <input type='radio' name='radio3' />
                                <span></span> 美丽说
                            </label>
                            <label className='form-radio m-l radio-sm'>
                                <input type='radio' name='radio3' />
                                <span></span> 淘世界
                            </label>
                        </div>
                        <pre className='m-t'>
                            <code className='block'>{"<label className='form-radio radio-md'>"}</code>
                            <code className='block'>{"    <input type='radio' name='radio1'/>"}</code>
                            <code className='block'>{"    <span></span>"}</code>
                            <code className='block'>{"    蘑菇街"}</code>
                            <code className='block'>{"</label>"}</code>
                        </pre>
                    </div>
                </div>
                <div className='row m-t'>
                    <div className='col-lg-4 p-n'>
                        <p className='text-bold m-b'>4、success radio <code>.success</code></p>
                        <div className='form-item'>
                            <label className='form-radio success'>
                                <input type='radio' name='radio4' />
                                <span></span> 蘑菇街
                            </label>
                            <label className='form-radio m-l success'>
                                <input type='radio' name='radio4' />
                                <span></span> 美丽说
                            </label>
                            <label className='form-radio m-l success'>
                                <input type='radio' name='radio4' />
                                <span></span> 淘世界
                            </label>
                        </div>
                        <pre className='m-t'>
                            <code className='block'>{"<label className='form-radio success'>"}</code>
                            <code className='block'>{"    <input type='radio' name='radio1'/>"}</code>
                            <code className='block'>{"    <span></span>"}</code>
                            <code className='block'>{"    蘑菇街"}</code>
                            <code className='block'>{"</label>"}</code>
                        </pre>
                    </div>
                    <div className='col-lg-4'>
                        <p className='text-bold m-b'>4、warning radio <code>.warning</code></p>
                        <div className='form-item'>
                            <label className='form-radio warning'>
                                <input type='radio' name='radio5' />
                                <span></span> 蘑菇街
                            </label>
                            <label className='form-radio m-l warning'>
                                <input type='radio' name='radio5' />
                                <span></span> 美丽说
                            </label>
                            <label className='form-radio m-l warning'>
                                <input type='radio' name='radio5' />
                                <span></span> 淘世界
                            </label>
                        </div>
                        <pre className='m-t'>
                            <code className='block'>{"<label className='form-radio warning'>"}</code>
                            <code className='block'>{"    <input type='radio' name='radio1'/>"}</code>
                            <code className='block'>{"    <span></span>"}</code>
                            <code className='block'>{"    蘑菇街"}</code>
                            <code className='block'>{"</label>"}</code>
                        </pre>
                    </div>
                    <div className='col-lg-4'>
                        <p className='text-bold m-b'>6、danger radio <code>.danger</code></p>
                        <div className='form-item'>
                            <label className='form-radio danger'>
                                <input type='radio' name='radio6' />
                                <span></span> 蘑菇街
                            </label>
                            <label className='form-radio m-l danger'>
                                <input type='radio' name='radio6' />
                                <span></span> 美丽说
                            </label>
                            <label className='form-radio m-l danger'>
                                <input type='radio' name='radio6' />
                                <span></span> 淘世界
                            </label>
                        </div>
                        <pre className='m-t'>
                            <code className='block'>{"<label className='form-radio danger'>"}</code>
                            <code className='block'>{"    <input type='radio' name='radio1'/>"}</code>
                            <code className='block'>{"    <span></span>"}</code>
                            <code className='block'>{"    蘑菇街"}</code>
                            <code className='block'>{"</label>"}</code>
                        </pre>
                    </div>
                </div>

                <h4>{this.props.num || 1}.3、checkbox 使用方式</h4>
                <blockquote>
                    checkbox的使用方式和radio一样
                </blockquote>

                <div className='form-item'>
                    <label className='form-checkbox'>
                        <input type='checkbox' name='checkbox1' />
                        <span></span> 蘑菇街
                    </label>
                    <label className='form-checkbox m-l'>
                        <input type='checkbox' name='checkbox1' />
                        <span></span> 美丽说
                    </label>
                    <label className='form-checkbox m-l'>
                        <input type='checkbox' name='checkbox1' />
                        <span></span> 淘世界
                    </label>
                </div>
                <div className='form-item'>
                    <label className='form-checkbox disabled'>
                        <input type='checkbox' name='checkbox2' disabled />
                        <span></span> 蘑菇街
                    </label>
                    <label className='form-checkbox disabled m-l'>
                        <input type='checkbox' name='checkbox2' disabled/>
                        <span></span> 美丽说
                    </label>
                    <label className='form-checkbox disabled m-l'>
                        <input type='checkbox' name='checkbox2' disabled />
                        <span></span> 淘世界
                    </label>
                </div>
                <div className='form-item'>
                    <label className='form-checkbox checkbox-md'>
                        <input type='checkbox' name='checkbox3' />
                        <span></span> 蘑菇街
                    </label>
                    <label className='form-checkbox m-l'>
                        <input type='checkbox' name='checkbox3' />
                        <span></span> 美丽说
                    </label>
                    <label className='form-checkbox checkbox-sm m-l'>
                        <input type='checkbox' name='checkbox3' />
                        <span></span> 淘世界
                    </label>
                </div>
                <div className='form-item'>
                    <label className='form-checkbox success'>
                        <input type='checkbox' name='checkbox4' />
                        <span></span> 蘑菇街
                    </label>
                    <label className='form-checkbox success m-l'>
                        <input type='checkbox' name='checkbox4' />
                        <span></span> 美丽说
                    </label>
                    <label className='form-checkbox success m-l'>
                        <input type='checkbox' name='checkbox4' />
                        <span></span> 淘世界
                    </label>
                </div>
                <div className='form-item'>
                    <label className='form-checkbox warning'>
                        <input type='checkbox' name='checkbox5' />
                        <span></span> 蘑菇街
                    </label>
                    <label className='form-checkbox warning m-l'>
                        <input type='checkbox' name='checkbox5' />
                        <span></span> 美丽说
                    </label>
                    <label className='form-checkbox warning m-l'>
                        <input type='checkbox' name='checkbox5' />
                        <span></span> 淘世界
                    </label>
                </div>
                <div className='form-item'>
                    <label className='form-checkbox danger'>
                        <input type='checkbox' name='checkbox6' />
                        <span></span> 蘑菇街
                    </label>
                    <label className='form-checkbox danger m-l'>
                        <input type='checkbox' name='checkbox6' />
                        <span></span> 美丽说
                    </label>
                    <label className='form-checkbox danger m-l'>
                        <input type='checkbox' name='checkbox6' />
                        <span></span> 淘世界
                    </label>
                </div>
            </div>
        );
    }
}
/* eslint-enable */


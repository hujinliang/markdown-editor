/**
 * Created by lenovo on 2016/7/17.
 */
import React from 'react'

export default class Container extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="row">
            <div className="btn-group">
                <button className="btn btn-default btn-raised">标题</button>
                <button className="btn btn-default">引用</button>
                <button className="btn btn-default">斜体</button>
                <button className="btn btn-default">粗体</button>
                <button className="btn btn-default">无序列表</button>
                <button className="btn btn-default">有序列表</button>
                <button className="btn btn-default">链接</button>
                <button className="btn btn-default">图片</button>
                <button className="btn btn-default">代码</button>
                <button className="btn btn-default">分割线</button>
            </div>
            <div class="pull-right">
                <button className="btn btn-info">编辑模式</button>
                <button className="btn btn-success">预览模式</button>
            </div>
        </div>
        )
    }
}
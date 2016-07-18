/**
 * Created by lenovo on 2016/7/17.
 */
import React from 'react'

export default class Container extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var {insert,changeMode,mode} = this.props;
        var controllerClass = "btn-group";
        controllerClass += mode?"":" hidden";
        return (
        <div className="row controller">
            <div className={controllerClass}>
                <button className="btn btn-default" onClick={insert("# ")}><i className="icon-title"></i>标题</button>
                <button className="btn btn-default" onClick={insert(">")}>引用</button>
                <button className="btn btn-default" onClick={insert("*文本*")}>斜体</button>
                <button className="btn btn-default" onClick={insert("**文本**")}>粗体</button>
                <button className="btn btn-default" onClick={insert("* ")}>无序列表</button>
                <button className="btn btn-default" onClick={insert("1. ")}>有序列表</button>
                <button className="btn btn-default" onClick={insert("[baidu](http://www.baidu.com)")}>链接</button>
                <button className="btn btn-default" onClick={insert("![cat](cat.png)")}>图片</button>
                <button className="btn btn-default" onClick={insert("`code`")}>代码</button>
                <button className="btn btn-default" onClick={insert("\n    ")}>代码块</button>
                <button className="btn btn-default" onClick={insert("\n***\n")}>分割线</button>
                <button className="btn btn-default" onClick={insert("| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")}>表格</button>
            </div>
            <div className="pull-right">
                <button className="btn btn-info controller-item" onClick={changeMode(1)}>编辑模式</button>
                <button className="btn btn-success controller-item" onClick={changeMode(0)}>预览模式</button>
            </div>
        </div>
        )
    }
}
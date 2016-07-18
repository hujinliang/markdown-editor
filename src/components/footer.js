/**
 * Created by jialao on 2016/7/18.
 */
import React from 'react'

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="row footer">
                <a href="https://github.com/HUJINLIANG/markdown-editor" target="_blank"><i className="icon1-github"></i></a>
                <a href="mailto:1617451312@qq.com"><i className="icon1-envelop"></i></a>
            </div>
        )
    }
}
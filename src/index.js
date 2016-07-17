/**
 * Created by lenovo on 2016/7/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.less'
import '../lib/marked'



class MarkdownApplication extends React.component{
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }


    render(){
        return (<div className="app">
            <div className="container-fluid">
                
            </div>
        </div>)
    }
}

ReactDOM.render(
    <MarkdownApplication />
    ,document.querySelector('.content'))


/**
 * Created by lenovo on 2016/7/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.less'
import markIt from'../lib/marked'
import Controller from './components/controller';



class MarkdownApplication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            markdown:''
        }
        this.changeValue = this.changeValue.bind(this);
        this.tag = this.tag.bind(this);
    }
    changeValue(e){
        console.log(e.target.value)
        this.setState({text:e.target.value});
    }
    tag(item){
        return function(){
            var text = this.state.text;
            var newText = text + String(item);
            this.setState({
                text:newText
            });
            this.refs.input.focus();
        }.bind(this)
    }
    render(){
        return (
        <div id="app">
            <div className="container-fluid">
                <Controller insert={this.tag} />
                <div className="row work-container">
                    <div className="col-xs-6">
                        <div className="page editor">
                            <p className="title">编辑栏</p>
                            <hr/>
                            <textarea ref="input" id="marking" value={this.state.text} onChange={this.changeValue}></textarea>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="page">
                            <p className="title">预览栏</p>
                            <hr/>
                            <div id="markdown-content" className="markdown-content" ref="output" dangerouslySetInnerHTML={{__html: markIt(this.state.text)}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

ReactDOM.render(
    <MarkdownApplication />
    ,document.querySelector('.content'))


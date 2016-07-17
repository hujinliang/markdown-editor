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
    }
    changeValue(e){
        console.log(e.target.value)
        this.setState({text:e.target.value});
    }

    render(){
        return (
        <div className="app">
            <div className="container-fluid">
                <Controller />
                <div className="row work-container">
                    <div className="col-xs-6">
                        <div className="page">
                            <hr/>
                            <textarea id="marking" value={this.state.text} onChange={this.changeValue}></textarea>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="page">
                            <hr/>
                            <div id="markdown-content" className="markdown-content" ref="content" dangerouslySetInnerHTML={{__html: markIt(this.state.text)}}></div>
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


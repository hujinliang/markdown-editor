/**
 * Created by lenovo on 2016/7/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.less'
import markIt from'../lib/marked'
import Controller from './components/controller';
import Footer from './components/footer';



class MarkdownApplication extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:'',
            editor:1,
            downloadURL:''
        }
        this.changeValue = this.changeValue.bind(this);
        this.tag = this.tag.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.changeData = this.changeData.bind(this);
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
    changeMode(num){
        return function() {
            this.setState({
                editor: num
            })
        }.bind(this)
    }
    changeData(){
        var value = markIt(this.state.text);
        var blob = new Blob([value]);
        var objURL = URL.createObjectURL(blob);
        this.setState({
            downloadURL:objURL
        })
    }
    render(){
        var class1,class2;
        if(this.state.editor){
            class1 = "col-xs-6";
            class2 = "col-xs-6";
        }else{
            class2 = "col-xs-12";
            class1 = "hidden";
        }
        return (
        <div id="app">
            <div className="container-fluid">
                <Controller insert={this.tag} changeMode={this.changeMode} mode={this.state.editor} changeData={this.changeData} downloadURL={this.state.downloadURL} />
                <div className="row work-container">
                    <div className={class1}>
                        <div className="page editor">
                            <p className="title">编辑栏</p>
                            <hr/>
                            <textarea ref="input" id="marking" value={this.state.text} onChange={this.changeValue}></textarea>
                        </div>
                    </div>
                    <div className={class2}>
                        <div className="page">
                            <p className="title">预览栏</p>
                            <hr/>
                            <div id="markdown-content" className="markdown-content" ref="output" dangerouslySetInnerHTML={{__html: markIt(this.state.text)}}></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        )
    }
}

ReactDOM.render(
    <MarkdownApplication />
    ,document.querySelector('.content'))


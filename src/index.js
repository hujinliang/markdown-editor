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
            downloadURL:'',
            startPoint:0,
            endPoint:0
        }
        this.changeValue = this.changeValue.bind(this);
        this.tag = this.tag.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.changeData = this.changeData.bind(this);
        this.clearAll = this.clearAll.bind(this)
    }
    changeValue(e){

        this.setState({text:e.target.value});
    }
    tag(item){
        return function(){

        var myField = this.refs.input;
        var startPoint;
        var endPoint;
            var text = this.state.text;
            var newText = text;

            if (document.selection) { 
            myField.focus() 
            sel = document.selection.createRange() 
            sel.text = item 
            sel.select() 
            } 
             else if (myField.selectionStart || myField.selectionStart == '0') { 
            var startPos = myField.selectionStart 
            var endPos = myField.selectionEnd 

            var restoreTop = myField.scrollTop 
            newText = text.substring(0, startPos) + item + text.substring(endPos,text.length) 
            if (restoreTop > 0) { 

              myField.scrollTop = restoreTop 
            } 
              myField.focus() 
              startPoint = startPos + item.length 
              endPoint = startPos + item.length 
          } else { 
              newText += item 
              myField.focus() 
            } 


            this.setState({
                text:newText,
                startPoint:startPoint,
                endPoint:endPoint
            });
            
        }.bind(this)
    }
    componentDidUpdate(prevProps,prevState){
        console.log('update');
        if(this.state.startPoint != prevState.startPoint)
        {
            this.refs.input.selectionStart = this.state.startPoint;
            this.refs.input.selectionEnd = this.state.endPoint;
            this.refs.input.focus();
        }
       
    }
    changeMode(num){
        return function() {
            this.setState({
                editor: num
            })
        }.bind(this)
    }
    changeData(){
        var value = this.state.text;
        var blob = new Blob([value]);
        var objURL = URL.createObjectURL(blob);
        this.setState({
            downloadURL:objURL
        })
    }
    clearAll(){
        this.setState({
            text:''
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
                <Controller insert={this.tag} changeMode={this.changeMode} mode={this.state.editor} changeData={this.changeData} downloadURL={this.state.downloadURL} clearAll={this.clearAll} />
                <div className="row work-container">
                    <div className={class1}>
                        <div className="page editor">
                            <p className="title">编辑栏</p>
                            <hr/>
                            <textarea ref="input" autofocus selectionStart='100' id="marking" value={this.state.text} onChange={this.changeValue}></textarea>
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


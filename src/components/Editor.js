import React, { useEffect, useRef, useState } from 'react'

import Editor from "@monaco-editor/react";
import {DiffEditor} from '@monaco-editor/react'
import './css/Editor.css'

import { getCode, getCodeDiff } from './helpers/get-code'
import { handleEditorWillMount } from './helpers/settings-monaco'
 
function CustomEditor(props) {
    const START_VALUE = getCode();
    const END_VALUE = getCodeDiff();

    const editorRef = useRef(null);
   
    const [value, setValue] = useState('');
    

    function handleEditorDidMount(editor, monaco) {
        console.log("mounted")
        editorRef.current = editor; 
    }

    function changeValue(e) {
        setValue(e)
    }

    useEffect(() => {
        setValue(START_VALUE)
    },[])
    
    return (
        <div>
            {!props.showDiff ?
                <div>
                    <Editor
                        theme="my-theme"
                        //language={props.language}
                        height="80vh"
                        value={value}
                        onChange={changeValue}
                        keepCurrentModel={true}
                        line={1}
                        defaultLanguage="MDX_LL"
                        onMount={handleEditorDidMount}
                        beforeMount={handleEditorWillMount}
                    />
                </div>
                 :
                <div>
                    <DiffEditor
                        
                        theme="my-theme"
                        //language={props.language}
                        height="80vh"
                        //original={START_VALUE}
                        original={START_VALUE}
                        modified={value}
                        //modified={"qweqwe"}
                        language="MDX_LL"
                        onMount={handleEditorDidMount}
                        beforeMount={handleEditorWillMount}
                    />
                </div>
            }
        </div>
   
    );
}


export default CustomEditor;
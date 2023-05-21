import React from 'react'
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


// Dynamically import the editor so that it is not included in the server-side bundle
const Editor = dynamic(() => import("react-draft-wysiwyg").then((module) => module.Editor), {
    ssr: false,
});

const Texteditor = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
        <Editor 
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border"
        />
    </div>
    
  )
}

export default Texteditor
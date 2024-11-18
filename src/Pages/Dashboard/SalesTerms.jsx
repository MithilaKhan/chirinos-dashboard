import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';

const SalesTerms = () => { 
    const editor = useRef(null)
    const [content, setContent] = useState('');
  
    const terms = {
      description:" Customer Services stands at the forefront of sophisticated matchmaking, where accomplished individuals can make exceptional connections. Here you can find women of your choice by sharing your thoughts and opinions You deserve nothing less than extraordinary – find someone born for you."
      }
  
    const privacyDataSave =async () => {
  
    }
  
  
    useEffect(()=>{
      setContent(terms?.description);
    }, [terms]) 
    return (
        <div > 
   
    <JoditEditor
      ref={editor}
      value={content}
        onChange={newContent => { setContent(newContent) }}
    />  

    <div className='flex items-center justify-center mt-5'>
<button onClick={privacyDataSave} type="primary" htmlType="submit" className="bg-primary text-white w-[160px] h-[42px] rounded-lg">
            Submit
          </button>
      
    </div>

  </div>
    );
};

export default SalesTerms;
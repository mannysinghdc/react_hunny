import { MDBTextArea, MDBBtn } from 'mdb-react-ui-kit';
import { useContext, useState } from 'react'
import Alert from './Alert';
import BgButton from './BgButton';
import { TextCounterContext } from '../../../store/Text-Coounter-Item';
import TextButton from './TextButton';

const TextConter = () => {

    const { text, setText, mode } = useContext(TextCounterContext)

    //Title 
    document.title = "Text Counter"
    return (
        <>
            <Alert />
            <BgButton />
            <div className="container my-4">
                <div className="col-md-8 mx-auto">
                    <h2 className='mb-4'>Enter the text to analyze</h2>
                    <MDBTextArea className={`mb-4 ${mode === "light" ? null : "text-white"}`} label="Enter Text" id="myBox" rows={6} value={text} onChange={(e) => setText(e.target.value)} />

                    <TextButton />
                </div>

            </div>
        </>
    )
}

export default TextConter
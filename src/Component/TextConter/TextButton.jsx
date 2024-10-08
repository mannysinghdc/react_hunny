import { MDBBtn } from 'mdb-react-ui-kit';
import { useContext } from 'react'
import { TextCounterContext } from '../../../store/Text-Coounter-Item';

const TextButton = () => {
    const { text, setText,showAlert } = useContext(TextCounterContext)
console.log(text)

    //This is for display 0 word at initail state
    const newText = text.split(/\s+/)    // Regular expression used here***********
    const treuTextWord = newText.filter(e => e !== "").length
   

    //This is for display 0 Time at initial state
    const valTime = (0.008 * treuTextWord).toFixed(2)

    // Uppercase Function
    const upHanlder = () => {
        setText(text.toUpperCase())
        showAlert("Converted to Uppercase!", "success")
    }

    // Lowercase Function
    const lowerHanlder = () => {
        setText(text.toLowerCase())
        showAlert("Converted to Lowercase!", "success")
    }

    // Clear Function
    const clearHnadler = () => {
        setText("")
        showAlert("Text is Cleared!", "success")
    }
    // Extra space removal Function
    const extraSpaceHnadler = () => {
        const newTex = text.split(/[ ]+/)
        setText(newTex.join(" "))
        showAlert("Extra Space Removed!", "success")
    }


    // Reversed text Function
    const reverseHnadler = () => {
        const val = text.split(" ").toReversed().join(" ")
        setText(val)
        showAlert("Text has been reversed!", "success")
    }

    // Copy Function
    const copyHnadler = () => {
        // const myText = document.getElementById("myBox")
        // myText.select();
        navigator.clipboard.writeText(text)
        showAlert("Copied to clipboared!", "success")
        //document.getSelection().removeAllRanges()   //this is for remove all range blue color
    }

    return (
        <>
            <MDBBtn disabled={!text} rounded className='mx-2 my-1' color='primary' size='sm' onClick={upHanlder}>
                UpperCase
            </MDBBtn>
            <MDBBtn disabled={!text} rounded className='mx-2 my-1' color='primary' size='sm' onClick={lowerHanlder} >
                LowerCase
            </MDBBtn>
            <MDBBtn disabled={!text} rounded className='mx-2 my-1' color='primary' size='sm' onClick={copyHnadler}>
                Copy
            </MDBBtn>
            <MDBBtn disabled={!text} rounded className='mx-2 my-1' color='primary' size='sm' onClick={clearHnadler}>
                Clear
            </MDBBtn>
            <MDBBtn disabled={!text} rounded className='mx-2 my-1' color='primary' size='sm' onClick={extraSpaceHnadler}>
                Space Remove
            </MDBBtn>
            <MDBBtn disabled={!text} rounded className='mx-2 my-1' color='primary' size='sm' onClick={reverseHnadler}>
                Reversed
            </MDBBtn>

            
            <div className="container mt-4">
                <h3>Your text summary</h3>
                <p><strong>{treuTextWord}</strong>  Words and <strong>{text.length}</strong>  Characters</p>
                <p><strong>{valTime ? valTime : null}</strong> minutes read</p>
                <p>{!text ? "Enter something to preview here" : text}</p>
            </div>
        </>
    )
}

export default TextButton

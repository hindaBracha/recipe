import { useDispatch, useSelector } from "react-redux";
import { addLelel } from "./Set";
import swal from "sweetalert";

export const Aadlevel = () => {
    const Levels=useSelector(x=>x.Levels)
    const id=Levels[Levels.length-1].code
    const dispatch = useDispatch();
    /////Change---------------------------------------------------------------
    const Change = (event) => {
        if (!event.target[0].value) {
            alert("הלו!! הכנס רמה! טמבל"); return false;
        }
        return true
    }
    // ---send-------------------------------------------------------------
    const send = (event) => {
        event.preventDefault()
        if (Change(event)) {
            const level = {
                code:id+1,
                name: event.target[0].value
            }
            dispatch(addLelel(level))
            swal("נוסף בהצלחה", "had master", "success")
        }
        else alert("נכשל")
    }
    return <>
        <form className='login' onSubmit={(e) => send(e)}>
            {/* ----level------------------------------ */}
            <label htmlFor={'level'}>add level:</label>
            <br></br>
            <input id={'level'} placeholder={'input level recip'} ></input>
            <br></br>
            <input type={'submit'} value={'send'} className="btns"></input>
            <br></br>
        </form>

    </>
}
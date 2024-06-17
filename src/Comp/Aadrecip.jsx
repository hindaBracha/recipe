import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Container, Form } from "react-bootstrap";
import { Addrecipe, addIngridToRecip } from "./Set";

export const Aadrecip = (props) => {
    const codeuser = props
    const Categories = useSelector(x => x.Categories);
    const recipies = useSelector(x => x.recipes);
    const levels = useSelector(x => x.Levels);
    const ingreads = useSelector(x => x.Ingredients);
    const IngredientsToRecipes = useSelector(x => x.IngredientsToRecipes);
    const cuser = useSelector(x => x.currentUser)
    const users = useSelector(x => x.users)
    const [categor, setCatego] = useState()
    const [level, setLavel] = useState()
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [instrac, setInstrac] = useState();
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [id, setId] = useState(IngredientsToRecipes[IngredientsToRecipes.length - 1].code);
    const cuc = users.filter(u => u.mail == cuser.mail)
    const dispatch = useDispatch();
    const nav = useNavigate()
    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    }
    /////Change---------------------------------------------------------------
    const Change = () => {
        if (!categor || !level || !selectedOptions || !instrac || !image || !name) {
             return false;
        }
        return true
    }
    /////addingread---------------------------------------------------------------
    const addingread = (i, index, recipid, id) => {
        const ingreadstorecipe = {
            code: id + 1 + index,
            recipid: recipid + 1,
            Ingredid: selectedOptions[index].Ingredid,
            codeuser: cuc[0].id
        }
        dispatch(addIngridToRecip(ingreadstorecipe))
    }

    /////send---------------------------------------------------------------
    const send = (event) => {
        debugger
        event.preventDefault()
        const recipid = recipies[recipies.length - 1].recipid
        if (Change()) {
            const recip = {
                recipid: recipid + 1,
                name: name,
                recippic: URL.createObjectURL(image),
                instraction: instrac,
                codeuser: cuc[0].id,
                codeCateg: categor,
                level: level
            }

            dispatch(Addrecipe(recip))
            selectedOptions.map((l, index) => addingread(l, index, recipid, id))

            swal("המתכון", "נוסף בהצלחה י'שף", "success")
        }
        else alert("הלו מלא את כל השדות טמבל")
    }
    debugger
    return <>
        {/* ----categor------------------------------ */}
        <form className='login' onSubmit={(e) => send(e)}>
            <label htmlFor="selcetCategor">select Categor:</label>
            <br></br>
            <select id="selcetCategor" onChange={(e) => setCatego(e.target.value)}>
                <option value="" disabled selected hidden>בחר אפשרות</option>
                {Categories.map((c, index) => <option key={index} value={c.codeCateg}>{c.name}</option>)}
            </select>

            {/* ----level------------------------------ */}
            <label htmlFor="selcetLavel">select Lavel:</label>
            <br></br>
            <select id="selcetLavel" onChange={(e) => setLavel(e.target.value)}>
                <option value="" disabled selected hidden>בחר אפשרות</option>
                {levels.map((l, index) => <option key={index} value={l.code}>{l.name}</option>)}
            </select>
            {/* ----ingread------------------------------ */}
            <label htmlFor="selcetingread">select ingread:</label>
            <br></br>
            <select multiple id="selcetingread">
                {ingreads.map((option, index) => (
                    <option key={index} value={option.Ingredid} onClick={() => handleOptionChange(option)}
                    className={selectedOptions.includes(option) ? 'selected-option' : ''}
                    >{option.name} </option>
                ))}
            </select>
            
            {/* ---instrac---------------------------------------- */}
            <label htmlFor="instrac"> instrac:</label>
            <br></br>
            <textarea rows="4" cols="38" className="instrac" id="instrac" onBlur={(e) => setInstrac(e.target.value)} />
            {/* ---pic---------------------------------------- */}
            <Container className="App">
                <Form>
                    <Form.Group controlId="formImage">
                        <Form.Label>בחר תמונה</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                    </Form.Group>
                </Form>
                <div className="image-preview">

                    {image && <img src={URL.createObjectURL(image)} alt="תמונה" width={250} />}
                </div>
            </Container>
            <br></br>
            <label htmlFor={'name'}>recip name:</label>
            <br></br>
            <input id={'name'} placeholder={'input name recip'} onChange={(e) => setName(e.target.value)}></input>
            {/*<br></br>
      <label htmlFor={'pass'}>Password:</label>
      <br></br>
      <input id={'pass'} type={'password'} placeholder={'input password'}></input>
      <br></br>*/}
            <input type={'submit'} value={'send'} className="btns"></input>
            <br></br>
        </form>
    </>
}
import { useDispatch, useSelector } from "react-redux"
import { addUser, setCurrentUser } from "./Set"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"
import '../Style/staylregister.css'

export const Singin = () => {
  const dispatch = useDispatch()
  const list = useSelector(x => x.users)
  const nav = useNavigate()

  const check = (mail, pass) => {
    let bool = true
    list.map((u) => { if (u.mail == mail) { alert("כתובת האימייל קיימת במערכת"); bool = false; return } })
    if (!bool) return false
    if (pass.length < 4) { alert("היי!! הסיסמא קצרה מדי !! לפחות 4 תווים"); return false }
    if (!mail.includes('@')) { alert(" ! כפרה אמייל לא תקין"); return false }
    return true
  }
  const send = (event) => {
    event.preventDefault()
    let name = event.target[0].value

    if (check(event.target[1].value, event.target[2].value)) {
      let numid = list[list.length - 1].id
      const curentuser = {
        name: name,
        mail: event.target[1].value
      }
      const user = {
        id: numid + 1,
        name: name,
        mail: event.target[1].value,
        password: event.target[2].value
      }
      dispatch(setCurrentUser(curentuser))
      dispatch(addUser(user))
      swal(`שלום${name}`, "התחברת בהצלחה", "success");
      nav(`/Home`)
    }

  }
  const toLogin = () => {
    nav(`/Login`)
  }
  return <>
    <div className="wraped">
      <form className='login' onSubmit={(e) => send(e)}>
        <label htmlFor={'name'}>name:</label><br></br>
        <input id={'name'} placeholder={'input name'}></input>
        <br></br>
        <label htmlFor={'email'}>Email:</label><br></br>
        <input id={'email'} placeholder={'input email'}></input>
        <br></br>
        <label htmlFor={'pass'}>Password:</label><br></br>
        <input id={'pass'} type={'password'} placeholder={'input password'}></input>
        <br></br>
        <input type={'submit'} value={'send'} className="btns"></input>
        <button className="btns" onClick={() => toLogin()}>להתחברות</button>
        <br></br>
      </form>
    </div>
    <h1>!ברוכים הבאים לאתר  מאמבורגר</h1>
    <h4>אם אתם אוהבים לבשל ולטעום מנות טעימות בבית, אתר זה הוא המקום המושלם עבורכם</h4>
    <div>
      כאן תוכלו לגלות מאות מתכונים מכל העולם,
      <br />
      לשתף במתכונים שלכם ולהתנסות בקריאת מתכונים חדשים ומרתקים ממגוון רחב של סגנונות וטעמים.
      <br />
      כדי להתחיל, אנא מלאו את הפרטים הבסיסיים שלכם וצרו לכם חשבון אישי. 
      <br/>
      זה פשוט וקל, ותוכלו לגלות את כל היתרונות שהאתר מציע.
      <br/>
     בצעד הבא, תוכלו לשתף את המתכונים שאתם אוהבים ולקבל המלצות ממתכונים מנוסים בקהילה שלנו.
     <br/>
     אנחנו מקווים שתהנו מהשהייה אצלנו ושתמצאו המון השראה טובה לבישולים משובחים.
    </div>
    <h3>אז למה תחכו? הצטרפו אלינו עוד היום והתחילו לגלות את עולם הטעמים שבפניכם!</h3>
  </>
}
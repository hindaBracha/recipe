import '../Style/style.css'
import '../Style/staylregister.css'
import { setCurrentUser } from './Set'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
    const dispatch = useDispatch();
    const list = useSelector(x => x.users);
    const nav = useNavigate()

    const check = (mail, pass) => {
        let ind = "undefined";
        list.forEach((u, index) => {
            if (u.mail === mail && u.password === pass) {
                ind = index; return;
            }
        });
        return ind;
    }
    const send = (event) => {
        event.preventDefault()
        let ind = check(event.target[0].value, event.target[1].value)
        if (ind != "undefined") {
            let namee = list[ind].name
            const curentuser = {
                name: namee,
                mail: event.target[0].value
            }
            dispatch(setCurrentUser(curentuser))
            swal(`שלום${list[ind].name}`, "התחברת בהצלחה", "success")
            nav(`/Home`)

        }
        else alert("לא נמצא משתמש או שהסיסמא אינה נכונה")
    }
    const toSignin = () => {
        nav(`/Singin`)
    }
    return <>
        <div className="wraped">
            <form className='login' onSubmit={(e) => send(e)}>
                <label htmlFor={'email'}>Email:</label>
                <br></br>
                <input id={'email'} placeholder={'input email'}></input>
                <br></br>
                <label htmlFor={'pass'}>Password:</label>
                <br></br>
                <input id={'pass'} type={'password'} placeholder={'input password'}></input>
                <br></br>
                <input type={'submit'} value={'send'} className="btns"></input>
                <button className="btns" onClick={() => toSignin()}>signin</button>
                <br></br>
            </form>
        </div>
        <h1>!!שבת אלינו, ידיד הבישול, אח למטבח, ורע לטעמים מיוחדים</h1>
        <h4>יש לך הרבה טעמים לגלות ואנחנו כאן כדי להיות לצידך בכל הקרבות הטעימים שלך</h4>
        <div>
            הזן את הפרטים שלך,
            <br />
            והתחבר לעולם הטעמים והמתכונים המרשימים שלנו.
            <br />
            תראה מה יש חדש במבחר ותתחיל לבשל, לשתות, ולחלום על המתכונים הבאים.
        </div>
        <h2>אז מה אתה מחכה? התחבר ותחגוג טעמים חדשים</h2>
    </>
}
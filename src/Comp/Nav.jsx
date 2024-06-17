import { NavLink } from 'react-router-dom'
import '../Style/style.css'
import home from'../Pic/Home.png'
import rec from'../Pic/תודה להורים- נופש (30  30 סמ).png'
import gal from'../Pic/אייקון גלריה.png'
export const Nav = (props) => {
    const {set}=props
        return <>
            <div className={'nav'}>
            <NavLink to='RecipeReviewCard' className={'link'}onClick={() => set(true)}><img src={rec} width={'40px'} height={'40px'}></img></NavLink>
            <NavLink to='Home' className={'link'}onClick={() => set(true)}><img src={home} width={'40px'} height={'40px'}></img></NavLink>
            <NavLink to='Galery' className={'link'}onClick={() => set(true)}><img src={gal} width={'40px'} height={'40px'}></img></NavLink> 
            </div>
    </>
}
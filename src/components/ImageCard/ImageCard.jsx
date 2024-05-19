import css from './ImageCard.module.css'
import { MdAccountCircle, MdOutlineFavorite } from "react-icons/md";

export default function ImageCard({alt, urlSm, urlReg, likes, username, openModal}) {

    return (
        <>
            <div onClick={() => openModal(alt, urlReg)} className={css.imageCard}>
                <img src={urlSm} alt={alt} width='400' height='300' className={css.image}/>
                <div className={css.imageInfo}>
                    <p className={css.username}><MdAccountCircle className={css.icon}/>{username}</p>
                    <p className={css.likes}><MdOutlineFavorite className={css.icon}/>{likes}</p>
                </div>
            </div>
        </>
    )
}
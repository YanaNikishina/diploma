import React from 'react'
import styles from '../modules/footer.module.css'
import logo from '../img/logo.svg'
import vk from '../img/vk.svg'
import youtube from '../img/youtube.svg'
import inst from '../img/inst.svg'
import {Link} from 'react-router-dom'

export const Footer =()=>{
    return(
        <div className={styles.footer}>
           <header className={styles.header}>
                <img src={logo} alt="Logo"/>
            </header>
            <div className ={styles.big_conteiner}>
                <div className={styles.box1}>
                    <p className={styles.box1_text1}>
                        Ростовский-на-Дону колледж связи и информатики
                    </p>
                    <p className={styles.box1_text2}>
                        Разработка: <br/>
                        <span className={styles.sp1_box1_text2}> Никишина Яна и Мамин Даниэль</span>
                        <span className={styles.sp2_box1_text2}></span>
                        <br/>©2021
                    </p>
                </div>
                <div className={styles.box_flex}>
                    <div className={styles.box2}>
                        <div className={styles.box2_blok1}>
                            <a href='https://www.rksi.ru/'>
                            <p className={styles.box2_li1}>
                                Портал РКСИ
                            </p>
                            </a>
                            <Link className={styles.link} to ={'/pages/News'}>
                            <p className={styles.box2_li2}>
                                Новости
                            </p>
                            </Link>
                        </div>
                        
                        <div className={styles.box2_blok2}>
                        <Link className={styles.link} to ={'/pages/MyDiplom'}>
                            <p className={styles.box2_li3}>
                                Мой диплом 
                            </p>
                        </Link>
                        <Link className={styles.link} to ={'/pages/Documents'}>
                            <p className={styles.box2_li4}>
                                Документы
                            </p>
                        </Link>
                        </div>
                        <div className={styles.box2_blok3}>
                        <Link className={styles.link} to ={'/pages/InstructStud'}>
                            <p className={styles.box2_li5}>
                                Инструкции
                            </p>
                        </Link>
                        <Link className={styles.link} to ={'/pages/fAQ'}>
                            <p className={styles.box2_li6}>
                                FAQ
                            </p>
                        </Link>
                        </div>
                    </div>
                    <div className={styles.box3}>
                        <a href='https://vk.com/pkcu_college'>
                        <img className={styles.box3_href1}src={vk} alt="photo1"/>
                        </a> 
                        <a href='https://www.youtube.com/channel/UCCQx7F4dRY_LcsRrJcZYGDQ'>
                        <img className={styles.box3_href1}src={youtube} alt="photo2"/> 
                        </a>
                        <a href='https://www.instagram.com/rksi_ru/'>
                        <img className={styles.box3_href1}src={inst} alt="photo3"/>
                        </a>   
                    </div>
                </div>
            </div>
        </div>
    )
}
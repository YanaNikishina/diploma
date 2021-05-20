import React from 'react'
import styles from '../modules/news.module.css'
import {Footer} from '../components/Footer'
import {MenuPU} from '../components/MenuPU'
import group from '../img/Group.svg'
import Agreement from '../img/Agreement.svg'

export const NewsPU=()=>{
    
    return(
        <div className={styles.body}>
            <div className={styles.massg}>
                <p className ={styles.text_massg}>Важное сообщение!!</p>
            </div>
            <MenuPU className={styles.menu}></MenuPU>
            <div className={styles.big_conteiner}>
                <p className={styles.text_hi}>Новости</p>
                <div className={styles.conteiner}>
                    <div className={styles.news}>
                        <div className={styles.new1} >
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        <div className={styles.new1}>
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        <div className={styles.new1}>
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        <div className={styles.new1}>
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        <div className={styles.new1}>
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        <div className={styles.new1}>
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        <div className={styles.new1}>
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        <div className={styles.new1}>
                            <img className={styles.contacts_photo} src ={group} alt="Photos"/>
                            <p className={styles.new_text1}>Новые критерии ВКР</p>
                        </div>
                        
                        <div className={styles.dip_box1}> 
                            <p className={styles.text1}>Новости портала</p>
                            <div className={styles.news}>
                            <p className={styles.new_text}>Текст статьи текст статьи текст статьи  текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи<br/> текст тсатьи

Текст статьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи 

Текст статьи текст статьи текст статьи текст статьи текст тсатьи текст статьи текст статьи текст статьи текст статьи текст тсатьи</p>
                            <img className={styles.contacts_photo1} src ={Agreement} alt="Photos"/>
                            </div>
                        </div>
                        <div className={styles.box5}>
                    <p className={styles.dip_text}>Создать новость</p>
                        <p className={styles.term_text}>Внеситеданные для создания новой статьи</p>
                        <input name="name" className={`${styles.input} ${styles.input_text}`} placeholder="Заголовок статьи"/>
                        <input name="dol" className={`${styles.input} ${styles.input_text}`} placeholder=" Содержание.."/>

                        <button type='submit' className={styles.btn}>
                            <span className={styles.txakk}>Создать</span>  
                        </button> 
                
                    </div>
                    </div>
                    
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}
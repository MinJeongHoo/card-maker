import React from 'react';
import Button from '../../button/button';
import ImageFileInput from '../../image_file_input/image_file_input';
import styles from './card-edit-form.module.css';
const CardEditForm = ({ card }) => {
    const onSubmit = () => { };
    const { name, company, title, email, message, theme, fileName, fileURL } = card
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name}></input>
            <input className={styles.input} type="text" name="company" value={company}></input>
            <select className={styles.select} name="theme" value={theme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title}></input>
            <input className={styles.input} type="text" name="email" value={email}></input>
            <textarea className={styles.textarea} name="message" value={message}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name="Delete" onClick={onSubmit}></Button>
        </form>
    )
};

export default CardEditForm;
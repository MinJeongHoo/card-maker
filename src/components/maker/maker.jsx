import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'jeonghoo',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'msw1302@gmail.com',
            message: 'go for it',
            fileName: 'jeonghoo'

        },
        {
            id: '2',
            name: 'jeonghoo',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'msw1302@gmail.com',
            message: 'go for it',
            fileName: 'jeonghoo'

        },
        {
            id: '3',
            name: 'jeongthoo',
            company: 'Samsung',
            theme: 'light',
            title: 'Software Engineer',
            email: 'msw1302@gmail.com',
            message: 'go for it',
            fileName: 'jeonghoo'

        }
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        });
    });
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
};

export default Maker;
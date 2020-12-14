import React from 'react';
import CardAddForm from './add-form/card-add-form';
import CardEditForm from './editor-form/card-edit-form';
import styles from './editor.module.css';
const Editor = ({ cards, addCard, updateCard, deleteCard, FileInput }) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {Object.keys(cards).map(key => (
            <CardEditForm
                key={key}
                FileInput={FileInput}
                card={cards[key]}
                updateCard={updateCard}
                deleteCard={deleteCard}
            />
        ))}
        <CardAddForm onAdd={addCard} FileInput={FileInput} />
    </section>
);

export default Editor;
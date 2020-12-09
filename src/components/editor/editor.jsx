import React from 'react';
import CardEditForm from './editor-form/card-edit-form';
import styles from './editor.module.css';
const Editor = ({ cards }) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        <div className={styles.editorForm}>
            {cards.map(card => (<CardEditForm key={card.id} card={card} />))}
        </div>
    </section>
);

export default Editor;
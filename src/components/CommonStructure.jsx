import React from 'react';
import styles from "../assets/css/Structure.module.css";

export const CommonStructure = ({commonOptions, setCommonOptions}) => {

    const onGreetingClick = () => {

        if (commonOptions.greetingMessage.selected) {
            setCommonOptions({
                ...commonOptions, greetingMessage: {...commonOptions.greetingMessage, selected: false}
            });
        } else {
            setCommonOptions({
                ...commonOptions,
                greetingMessage: {
                    ...commonOptions.greetingMessage, selected: true
                },
                regularAnswer: {
                    ...commonOptions.regularAnswer, selected: false
                },
            })
        }
    };

    const onAnswerClick = () => {
        
        if (commonOptions.regularAnswer.selected) {
            setCommonOptions({
                ...commonOptions, regularAnswer: {...commonOptions.regularAnswer, selected: false}
            });
        } else {
            setCommonOptions({
                ...commonOptions,
                regularAnswer: {
                    ...commonOptions.regularAnswer, selected: true
                },
                greetingMessage: {
                    ...commonOptions.greetingMessage, selected: false
                },
            })
        }
    };

    return (
        <>
            <div className={styles.commonTitle}>
                    <span>
                        Блоки вашего бота
                    </span>
                <p>
                    Ваш бот состоит из блоков с контентом.
                    Блоки можно сравнить со страничками на сайте.
                </p>
            </div>

            <div onClick={onGreetingClick}
                 className={`${styles.commonItem} ${commonOptions.greetingMessage.selected ? styles.commonActive : ''}`}>
                <span>
                Приветственное сообщение
                </span>
                <p>
                    Каждый человек его увидит в начале диалога.
                </p>
            </div>

            <div onClick={onAnswerClick}
                 className={`${styles.commonItem} ${commonOptions.regularAnswer.selected ? styles.commonActive : ''}`}>
                    <span>
                        Стандартный ответ
                    </span>
                <p>
                    Если бот не распознает ответ пользователя -
                    отправит это сообщение.
                </p>
            </div>
        </>
    );
};

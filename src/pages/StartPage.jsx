import React, {useState, useCallback} from 'react';
import styles from '../assets/css/StartPage.module.css';
import {StructureNav} from "../components/StructureNav";
import {Structure} from "../components/Structure";
import {CommonStructure} from "../components/CommonStructure";
import {GreetingMessageControls} from "../components/GreetingMessageControls";
import {AddButtonModal} from "../components/AddButtonModal";

const structure = [
    {
        title: 'Основные компоненты',
        items: [
            {name: 'Главное меню', id: 1},
            {name: 'О нас', id: 2},
            {name: 'Каталог', id: 3},
            {name: 'Мой баланс', id: 4},
        ],
        id: 1,
    },
    {
        title: 'Категории',
        items: [
            {name: 'Киев', id: 1},
            {name: 'Запорожье', id: 2},
            {name: 'Харьков', id: 3},
        ],
        id: 2,
    },
    {
        title: 'Подкатегории Киев',
        items: [],
        id: 3,
    },
    {
        title: 'Товары Киев',
        items: [
            {name: 'Candy nut', id: 1},
            {name: 'Choco Lapki', id: 2},
            {name: 'Monblan', id: 3},
        ],
        id: 4,
    },
];
const structure2 = [
    {
        title: 'Совсем другая структура',
        items: [
            {name: 'React', id: 1},
            {name: 'Redux', id: 2},
            {name: 'TypeScript', id: 3},
            {name: 'JavaScriptES6', id: 4},
        ],
        id: 1,
    },
    {
        title: 'Все по другому',
        items: [
            {name: 'Axios', id: 1},
            {name: 'redux-thunk', id: 2},
            {name: 'redux-form', id: 3},
        ],
        id: 2,
    },
    {
        title: 'И тут тоже',
        items: [],
        id: 3,
    },
    {
        title: 'Тут тем более',
        items: [
            {name: 'antd', id: 1},
            {name: 'css modules', id: 2},
            {name: 'react-lottie', id: 3},
        ],
        id: 4,
    },
];

const StartPage = () => {
    const [visibleStructure, setVisibleStructure] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [commonOptions, setCommonOptions] = useState({
        greetingMessage: {selected: false, message: '', withImage: true, buttons: []},
        regularAnswer: {selected: false, message: '', withImage: true, buttons: []},
    });
    const [, forceUpdate] = useState({});

    const itemSelected = (groupId, itemId) => {
        const currentStructure = (visibleStructure === 1 || visibleStructure === 3) ? structure : structure2;
        const group = currentStructure.find(el => el.id === groupId);
        const item = group && group.items.find(el => el.id === itemId);
        if (item) {
            item.selected = !item.selected;
            forceUpdate({});
        }
    };

    const addButton = (button) => {
        setCommonOptions({
            ...commonOptions,
            greetingMessage: {
                ...commonOptions.greetingMessage,
                buttons: [...commonOptions.greetingMessage.buttons, button]
            }
        });
    };

    const switchAddPictureMemo = useCallback(value => {
        setCommonOptions({...commonOptions, greetingMessage: {...commonOptions.greetingMessage, withImage: value}});
    }, [setCommonOptions, commonOptions]);

    const onMessageChangeMemo = useCallback(e => {
        setCommonOptions({
            ...commonOptions,
            greetingMessage: {...commonOptions.greetingMessage, message: e.target.value}
        });
    }, [setCommonOptions, commonOptions]);


    const setShowModalMemo = useCallback(value => setShowModal(value), [setShowModal]);
    const setVisibleStructureMemo = useCallback(value => setVisibleStructure(value), [setVisibleStructure]);
    const setCommonOptionsMemo = useCallback(value => setCommonOptions(value), [setCommonOptions]);

    return (
        <div className={styles.startPageBody}>
            <StructureNav visibleStructure={visibleStructure}
                          setVisibleStructure={setVisibleStructureMemo}/>

            <div className={styles.structureControls}>
                <CommonStructure commonOptions={commonOptions}
                                 setCommonOptions={setCommonOptionsMemo}/>
                <Structure itemSelected={itemSelected}
                           structure={(visibleStructure === 1 || visibleStructure === 3) ? structure : structure2}/>
            </div>

            <div className={styles.options}>
                {!!commonOptions.greetingMessage.selected &&
                <GreetingMessageControls options={commonOptions.greetingMessage}
                                         switchAddPicture={switchAddPictureMemo}
                                         onMessageChange={onMessageChangeMemo}
                                         setShowModal={setShowModalMemo}
                                         setCommonOptions={setCommonOptionsMemo}/>}

                {!!commonOptions.regularAnswer.selected && <h1>О, привет !</h1>}
            </div>

            <AddButtonModal showModal={showModal}
                            addButton={addButton}
                            setShowModal={setShowModalMemo}/>
        </div>
);
};

export default StartPage;
import React from "react";
import styles from "../assets/css/StructureNav.module.css";
import { BuildOutlined } from "@ant-design/icons";

export const StructureNav = ({visibleStructure, setVisibleStructure }) => {

    return (
        <div className={styles.navBar}>
            <button className={visibleStructure === 1 ? styles.active : ''}
                    onClick={ () => setVisibleStructure(1) }>
                <BuildOutlined />
                Структура 1
            </button>
            <button className={visibleStructure === 2 ? styles.active : ''}
                    onClick={ () => setVisibleStructure(2) }>
                <BuildOutlined />
                Структура 2
            </button>
            <button className={visibleStructure === 3 ? styles.active : ''}
                    onClick={ () => setVisibleStructure(3) }>
                <BuildOutlined />
                Структура 3
            </button>
            <button className={visibleStructure === 4 ? styles.active : ''}
                    onClick={ () => setVisibleStructure(4) }>
                <BuildOutlined />
                Структура 4
            </button>
        </div>
    )
};
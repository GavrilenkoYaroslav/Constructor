import React from 'react';
import styles from '../assets/css/AddButtonModal.module.css';
import {Form, Modal, Input, Select} from "antd";

const { Option } = Select;

const differentPlaces = ['Сюда', 'Или сюда', 'Может даже так', 'Сюда лучше не надо'];

export const AddButtonModal = ({
                                   showModal,
                                   setShowModal,
                                   addButton }) => {

    const [ form ] = Form.useForm();

    const submit = (values) => {
        addButton(values);
        form.resetFields();
        setShowModal(false);
    };

    return (
        <Modal width={600}
               height={620}
               visible={showModal}
               centered
               onCancel={() => setShowModal(false)}
               footer={null}
               title={null}>

            <Form form={form} name="addButton" layout="vertical" onFinish={submit}>

                <Form.Item
                    name="name"
                    label={"Как назовешь ?"}
                    required={false}
                    rules={[{required: true, message: "О, привет!"}]}
                >
                    <Input placeholder={'Введите название кнопки'}/>
                </Form.Item>

                <Form.Item
                    name="redirectTo"
                    label={"Куда отправим этих бедолаг ?"}
                    required={false}
                    rules={[{required: true, message: "Снова ты"}]}
                >
                    <Select placeholder={'Куда ?'}
                            showSearch
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }>
                        {differentPlaces.map((el, i) => <Option key={i} value={el}>{el}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <button type="submit" className={styles.submit}>
                        Добавить
                    </button>
                </Form.Item>

            </Form>
        </Modal>
    );
};
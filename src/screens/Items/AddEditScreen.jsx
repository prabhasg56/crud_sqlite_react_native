import React, { useState } from 'react';
import { View, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem, updateItemState } from '../../redux/Features/itemsSlice';
import { insertItem, updateItem } from '../../database/itemsModel';
import CustomButton from '../../components/Common/CustomButton';
import CustomTextInput from '../../components/Common/CustomTextInput';
import GoBack from '../../components/Common/GoBack';
import Toast from 'react-native-toast-message';
import Validation from '../../components/Common/Validation';

const AddEditScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const item = route.params?.item || { name: '', description: '' };

    const [itemInput, setItemInput] = useState({
        name: {
            label: "Item name*",
            type: "text",
            value: item.name,
            required: true,
            error_msg: "Name is required",
            error: false,
            maxLength: 100,
            disabled: false,
            placeholder: 'Enter Item Name',
        },
        description: {
            label: "Description*",
            type: "text",
            value: item.description,
            required: true,
            error_msg: "Description is required",
            error: false,
            maxLength: 500,
            disabled: false,
            placeholder: 'Enter Description',
            autoCapitalize: "none",
            numberOfLines: 2,
            multiline: true
        },

    });

    // console.log("item", item);

    const handleInput = (label, value) => {
        if (!label) return;

        setItemInput((prevItemInput) => ({
            ...prevItemInput,
            [label]: {
                ...prevItemInput[label],
                value,
            },
        }));
    }

    const resetForm = () => {
        const resetFields = {};

        Object.keys(itemInput).forEach(key => {
            resetFields[key] = {
                ...itemInput[key],
                value: "",
                error: false,
                error_msg: "",
            };
        });

        setItemInput(resetFields);
    };

    const handleSave = () => {

        const { name, description } = itemInput;

        let data = {};
        let newItemData = { ...itemInput };
        let hasError = false;

        for (let key in newItemData) {
            data[key] = newItemData[key]['value'];

            // Check if the field is required and empty
            if (newItemData[key].required && !data[key]) {
                newItemData[key].error = true;
                hasError = true;
                continue; // Skip further validation if empty
            } else {
                newItemData[key].error = false;
            }

            if (["name", "description"].includes(key)) {
                if (!Validation.validateText(data[key])) {
                    newItemData[key].error = true;
                    hasError = true;
                }
            }
        }

        setItemInput(newItemData);

        if (hasError) {
            Toast.show({
                type: 'info',
                text1: "Please fill all the required fields correctly"
            })
            return;
        }

        const action = item.id ? updateItem : insertItem;

        const callback = id => {
            dispatch(item.id ? updateItemState({ id: item.id, name: name.value, description: description.value }) : addItem({ id, name: name.value, description: description.value }));

        };

        action({ id: item.id, name: name.value, description: description.value }, callback);

        Toast.show({
            type: 'success',
            text1: "Item saved successfully"
        })
        resetForm();
        navigation.goBack();

    };


    const itemInputKeys = Object.keys(itemInput);

    return (
        <SafeAreaView style={styles.container}>
            <GoBack title={"Item Form"} />
            {itemInputKeys.map((item, index) => (
                <CustomTextInput
                    key={index}
                    labelName={itemInput[item]?.label || "Label"}
                    value={itemInput[item]?.value || ""}
                    name={item}
                    placeholder={itemInput[item]?.placeholder || ""}
                    handleInput={handleInput}
                    maxLength={itemInput[item]?.maxLength || 255}
                    type={itemInput[item]?.type || "text"}
                    options={itemInput[item]?.options || []}
                    disabled={itemInput[item]?.disabled || false}
                    saved={itemInput[item]?.saved || "value"}
                    keyboardType={itemInput[item]?.keyboardType || "default"}
                    multiline={itemInput[item]?.multiline || false}
                    numberOfLines={itemInput[item]?.numberOfLines || 1}
                    autoCapitalize={itemInput[item]?.autoCapitalize || "none"}
                    error_msg={itemInput[item]?.error_msg}
                    error={itemInput[item]?.error}
                />
            ))
            }
            {/* <TextInput value={name} onChangeText={setName} placeholder="Name" />
            <TextInput value={description} onChangeText={setDescription} placeholder="Description" /> */}

            <CustomButton onPress={handleSave} label="Save" />
        </SafeAreaView>
    );
}

export default AddEditScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
});

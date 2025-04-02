import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import CustumText from './CustomText';
import { dangerBtnColor, primaryColor } from '../../styles/GlobalStyles';

const CustomTextInput = ({
    labelName,
    value,
    name,
    autoCapitalize = "none",
    multiline = false,
    keyboardType = "default",
    error_msg = "",
    error = false,
    numberOfLines = 1,
    maxLength = 255,
    disabled = false,
    placeholder = "",
    handleInput = () => { },
    secureTextEntry = false
}) => {
    const [showPasswordText, setShowPasswordText] = useState(secureTextEntry);

    return (
        <>
            <KeyboardAvoidingView style={styles.container}>
                <TextInput
                    label={labelName}
                    disabled={disabled}
                    mode="outlined"
                    value={`${value}`}
                    onChangeText={(text) => handleInput(name, text)}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    autoCapitalize={autoCapitalize}
                    textColor={primaryColor}
                    outlineColor={error? dangerBtnColor : primaryColor}
                    activeOutlineColor={error? dangerBtnColor : primaryColor}
                    style={styles.input}
                    secureTextEntry={showPasswordText}
                    right={
                        name === "password" ? (
                            <TextInput.Icon 
                                icon={showPasswordText ? 'eye-off' : 'eye'}
                                onPress={() => setShowPasswordText(!showPasswordText)}
                            />
                        ) : null
                    }
                />
                {error && <CustumText style={styles.errorText}>{error_msg}</CustumText>}
            </KeyboardAvoidingView>
        </>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 10,
    },
    input: {
        backgroundColor: 'transparent',
    },
    errorText: {
        color: "red",
    },
});

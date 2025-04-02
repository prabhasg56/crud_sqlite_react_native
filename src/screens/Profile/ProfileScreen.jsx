import { Text, Button, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '../../components/ScreenWrapper';
import { primaryColor } from '../../styles/GlobalStyles';

const ProfileScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('user');
        navigation.replace('AuthStack');
    };

    return (
        <ScreenWrapper title={"Profile"}>
            <View style={styles.container}>
                <Button title="Logout" color={primaryColor} onPress={handleLogout} />
            </View>
        </ScreenWrapper>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

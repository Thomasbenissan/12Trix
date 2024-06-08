import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HeaderWithMenu } from '../components/Headers';

const UserSignInScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#011E57', '#001744']} style={styles.container}>
            <ImageBackground source={require('../../assets/gears-background.png')} resizeMode="cover" style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
                    <HeaderWithMenu />

                    <Text style={[styles.labelText, { marginTop: 64, marginBottom: 17 }]}>Login with a{'\n'}12trix subscription</Text>
                    <Image source={require('../../assets/12-trix-icon.png')} style={styles.icon} />

                    <View style={[styles.inputControl, { marginTop: 66 }]}>
                        <Text style={styles.inputControlLabel}>Email:</Text>
                        <TextInput style={styles.inputControlInput} />
                    </View>

                    <View style={[styles.inputControl, { marginTop: 94 }]}>
                        <Text style={styles.inputControlLabel}>Password:</Text>
                        <TextInput style={styles.inputControlInput} secureTextEntry={true} />
                    </View>

                    <View style={{ position: 'relative', marginTop: 94 }}>
                        <TouchableOpacity onPress={() => { navigation.push('Home'); }} style={[styles.actionBtn, { alignSelf: 'center' }]}>
                            <LinearGradient
                                colors={['#fedaec', '#fb61ae', '#e74194', '#fb61ae']}
                                locations={[0, 0.297, 0.523, 1]}
                                style={styles.actionBtn}
                            >
                                <Text style={styles.actionBtnText}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <Image
                            style={styles.robot}
                            source={require('../../assets/robot-1.png')}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

export default UserSignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    background: {
        flex: 1,
    },
    labelText: {
        fontFamily: 'Rubik-Regular',
        color: '#E8F8FF',
        fontSize: 28,
        lineHeight: 33,
        textAlign: 'center',
    },
    icon: {
        width: 74,
        height: 35,
        objectFit: 'contain',
        alignSelf: 'center',
    },
    input: {
        height: 48,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        fontFamily: 'Rubik-Regular',
        color: '#E8F8FF',
        fontSize: 28,
        lineHeight: 33,
        marginTop: 22,
        width: 238,
        alignSelf: 'center'
    },
    actionBtn: {
        width: 215,
        height: 57,
        borderRadius: 57,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionBtnText: {
        fontFamily: 'Rubik-Regular',
        color: '#ffffff',
        fontSize: 28,
    },
    robot: {
        width: 220,
        height: 550,
        objectFit: 'contain',
        position: 'absolute',
        top: 88,
        left: '50%',
        transform: [{ translateX: -110 }]
    },
    inputControl: {
        width: 238,
        height: 40,
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputControlLabel: {
        fontFamily: 'Rubik-Regular',
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 24
    },
    inputControlInput: {
        fontFamily: 'Rubik-Regular',
        color: '#E8F8FF',
        fontSize: 20,
        lineHeight: 24,
        flex: 1,
        paddingLeft: 10,
    }
});
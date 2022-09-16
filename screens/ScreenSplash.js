import React, { Component } from "react";
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Screen2 from "./Screen2";

class ScreenSplash extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }

    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }


    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render() {
        let Splash_Screen = (
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <Image source={require('../logo.png')}
                        style={{
                            alignSelf: 'center',
                            height: undefined,
                            width: '80%',
                            aspectRatio: 1,
                            display: 'flex',
                            borderRadius: 15
                        }}
                    />
                </View>
            </View>
        )
        return (
            <View style={styles.MainContainer}>
                <Screen2 />
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
            </View>
        );
    }
}

export default ScreenSplash;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'android') ? 20 : 0
    },
    SplashScreen_RootView: {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    SplashScreen_ChildView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        flex: 1,
        marginVertical: '-10%',
    },
});

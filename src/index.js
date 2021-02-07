
import React from 'react';
import {View, Image, ImageBackground, Alert, Modal, TouchableOpacity, } from 'react-native';

import styles from './styles';

import logo from './assets/logo.png';
import Icon from '@expo/vector-icons/MaterialIcons';

import {Camera} from 'expo-camera';

const cam = ({isVisible, onChangePhoto, onCloseCamera}) => {
    const [cam, setCam] = useState();

    const onTakePicture = async () => {
        try {
            const {uri} = await cam.takePictureAsync({
                quality: 0.5,
                forceUpOrientation: true,
                fixOrientation: true,
                skipProcessing: true
            });
            onChangePhoto(uri);
        } catch(error) {
            Alert.alert('Erro', 'Houve um erro ao tirar a foto!');
        }
    }

    return (
        <Modal animationType = "slide" transparent = {false} visible = {isVisible}>
            <Camera ref = {ref => setCamera(ref)} style = {{flex: 1}} 
                type = {Camera.Constants.Type.Back}
                autoFocus = {Camera.Constants.AutoFocus.On}
                flashMode = {Camera.Constants.FlashMode.off}
                androidCameraPermissionOptions = {{
                    title: 'Permissão para usar a câmera',
                    message: 'Precisamos da sua permissão para usar a câmera.',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancelar',
                }}
                captureAudio = {false}
            >
                <Icon name="photo-camera"
                    size={40}
                    color={'#fff'}
                    onPress={onTakePicture}
                    style={styles.buttonTakePicture} 

                />

                <Icon name="close"
                    size={50}
                    color={'#fff'}
                    onPress={onCloseCamera}
                    style={styles.buttonCloseCamera} 

                />

            </Camera>
        </Modal>
    );
}

export default function Index() {

    const [isCameraVisible, setIsCameraVisible] =  useState(false);
    const [photo, setPhoto] = useState(null);

    function onChange(newPhoto) {
        setPhoto(newPhoto);
        setIsCameraVisible(false);
    }

    function onCloseCamera() {
        setIsCameraVisible(false);
    }

    return(
        <View style = {styles.container}>
           <Image source = {logo} style = {styles.logo} />
           <View style = {styles.photo}>
               <ImageBackground
                    style = {{width: '100%', height: '100%'}}
                    source = {{uri: photo}}
               />
           </View>
           <View style = {styles.buttons}>
                <TouchableOpacity style = {styles.button} onPress = {() => {setIsCameraVisible(true)}}>
                    <Icon name="camera-alt" size = {40} color = {'#f37272'} />
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress = {() => {setPhoto(null)}}>
                    <Icon name = "delete" size = {40} color = {'#f37272'} />
                </TouchableOpacity>
           </View>

           <Camera isVisible = {isCameraVisible} onChangePhoto = {onChangePhoto} onCloseCamera = {onCloseCamera} />
        </View>
    )
}
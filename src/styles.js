import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f37272'
    },
    logo: {
        alignSelf: 'center',
        marginTop: 60
    },
    photo: {
        width: 300,
        height: 200,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 80
    },
    buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        borderRadius: 150,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTakePicture: {
        flex: 0,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 20,
    },
    buttonCloseCamera: {
        flex: 0,
        position: 'absolute',
        top: 20,
        right: 20,
    },
    
})

export default styles;

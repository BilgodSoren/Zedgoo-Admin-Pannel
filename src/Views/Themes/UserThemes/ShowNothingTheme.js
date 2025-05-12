import Fontfamily from "../../Universal/fontfamilyTheme";


const ShowNothingTheme = (theme) => ({

    container: {
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '67.5vh',
        width: '100%',
        border: '0.4px solid whitesmoke',
        boxShadow: '0px 0px 1px grey',
        fontFamily: Fontfamily.fontPrimary.fontFamily,
        borderRadius:'5px'
    },
    content: {
        position: 'absolute',
        right: '20px',
        top: '16px',
        cursor: 'pointer',
        marginLeft: '5px',
        justifyContent: 'center'
    }

})
export default ShowNothingTheme;
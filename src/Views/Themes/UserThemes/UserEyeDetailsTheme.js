import '@fontsource/poppins'


const UserEyeDetailsTheme = (theme) => ({

    container: {
        border: '0.4px solid whitesmoke',
        boxShadow: '0px 0px 1px grey',
        fontfamily: 'poppins sans-serif',
    },
    editicon: {
        position: 'absolute',
        width: '30px',
        height: '30px',
        cursor: 'pointer',

        color: 'black',
        position: 'absolute', right: "10px", top: '8px', bgcolor: 'white', border: '1px solid #ccc',
        borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
    },

    avatar: {
        fontfamily: 'poppins sans-serif',
        margin: '16px auto',
        width: 100,
        height: 100,
        border: '5px solid whitesmoke',
    },
    name: {
        textAlign: 'center',
        fontfamily: 'Poppins',
        color:'rgba(61, 61, 78, 1)',
     
        // fontSize: '12.5px',

      
        marginBottom: '16px',
    },
    enrollno: {
        fontfamily: 'poppins sans-serif',
        textAlign: 'center',
        fontSize: '14.5px',
        color: 'rgba(61, 61, 78, 1)',
        marginBottom: '16px',

    },
    gridcontainer: {
        fontfamily: 'poppins sans-serif',
        marginLeft: '5px'
    },

})

export default UserEyeDetailsTheme;
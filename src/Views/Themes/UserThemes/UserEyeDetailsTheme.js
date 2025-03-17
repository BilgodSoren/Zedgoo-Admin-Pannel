const UserEyeDetailsTheme = (theme) => ({

    container: {
        border: '0.4px solid whitesmoke',
        boxShadow: '0px 0px 1px grey',
    },
    editicon: {
        position: 'absolute',
        right: '10px',
        top: '16px',
        cursor: 'pointer'
    },

    avatar: {
        margin: '16px auto',
        width: 100,
        height: 100,
        border: '5px solid whitesmoke',
    },
    name: {
        textAlign: 'center',
        // fontSize: '12.5px',
    
        color: 'gray',
        marginBottom: '16px',
    },
    enrollno: {

        textAlign: 'center',
        fontSize: '14.5px',
        color: 'gray',
        marginBottom: '16px',

    },
    gridcontainer:{
        marginLeft:'5px'
    },
    
})

export default UserEyeDetailsTheme;
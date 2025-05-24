
import Fontfamily from "../../Universal/fontfamilyTheme";
import { createTheme } from "@mui/material";

const UserEyeDetailsTheme = createTheme ({

    font:{
          fontfamily: Fontfamily.fontPrimary.fontFamily
    },

    container: {
        border: '0.4px solid whitesmoke',
        boxShadow: '0px 0px 1px grey',
        // fontfamily: 'poppins sans-serif',
        fontfamily: Fontfamily.fontPrimary.fontFamily
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
        fontfamily: Fontfamily.fontPrimary,
        margin: '16px auto',
        width: 100,
        height: 100,
        border: '5px solid whitesmoke',
    },
    name: {    
        textAlign: 'center',
       fontfamily:Fontfamily.fontPrimary.fontFamily,
        fontSize: '24px',
        fontWeight:600,
        color: 'rgba(61, 61, 78, 1)',

        marginBottom: '16px',
    },
    enrollno: {
        fontfamily: Fontfamily.fontPrimary.fontFamily,
        textAlign: 'center',
        fontSize: '14.5px',
        color: 'rgba(61, 61, 78, 1)',
        marginBottom: '16px',
        fontWeight: 900,

    },
    gridcontainer: {
        fontfamily: Fontfamily.fontPrimary.fontFamily,
        marginLeft: '5px'
    },

});

export default UserEyeDetailsTheme;
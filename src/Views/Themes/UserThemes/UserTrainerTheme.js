import Fontfamily from "../../Universal/fontfamilyTheme";

const UserTrainerTheme = (theme) => ({
    box1: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid whitesmoke',
        boxShadow: '0px 0px 5px grey',
        borderRadius: '5px',
    },

    // tablecontainer :{

    // }
    table: {
        minWidth: 700
    },
    cellheading: {
        fontWeight: 600
    },

    //table body is not defined any css

    tablerow: {
        '&:nth-child(even)': { backgroundColor: 'whitesmoke' },
        height: '30px',
        borderRadius: '10px', fontWeight: 400,

    },
    celldata: {
        fontWeight: 590, padding: '6px', align: "center", fontsize: '14px', fontFamily: Fontfamily.fontPrimary.fontFamily,
        fontWeight: 400,
    },
    icon: {
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '5px',
        color: 'black',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
    },
    lastbox: {
        position: 'absolute',
        right: '20px',
        top: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '28%',
    }



})
export default UserTrainerTheme;
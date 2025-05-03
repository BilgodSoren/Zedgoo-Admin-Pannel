import '@fontsource/poppins'

const BatchesTheme = (theme) => ({
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
        fontWeight: 600,
        fontfamily: 'Poppins sans-serif'
    },

    //table body is not defined any css

    tablerow: {
        '&:nth-child(even)': { backgroundColor: 'whitesmoke' },
        height: '30px',
        borderRadius: '10px',
    },
    celldata: {
        fontWeight: 590, padding: '6px', align: "center",
        fontFamily: "Poppins",
        fontWeight: '400',
       
    },
    icon: {
        cursor: 'pointer',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
        padding: '3px',
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
        top: '100px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '28%',
    }




})
export default BatchesTheme;
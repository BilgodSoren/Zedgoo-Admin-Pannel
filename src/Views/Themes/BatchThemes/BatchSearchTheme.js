const BatchSearchTheme = (theme) => ({

    box1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px',
        borderRadius: '5px',
    },

    //search and add new

    box2: {
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '15px'
    },
    textfield: {
        width: '300px', height: '40px', borderRadius: '10px'
    },
    addbtn: {
        backgroundColor:'rgba(42, 41, 39, 1)',
        height: '40px',
        color:'white',
        textTransform: 'none',
    }
})
export default BatchSearchTheme;
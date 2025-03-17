const BatchManagementTheme = (theme) =>({

    mainbox : {
        backgroundColor: 'rgba(42, 41, 39, 1)', fontFamily: '', width: '12%', display: 'flex', flexDirection: 'column' 
    },
    appbar :{
        width: '88%', height: '6vh', backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    iconbutton :{
         color: 'black', width: '99%', height: '100%', position: 'relative', left: '47%'
    },
    avatar:{
        height:'30px',
        width:"30px"
    },
    batchbox:{
        display:'flex', justifyContent:'space-between',alignItems:'center'
    },
    batchtypography:{
         color: 'black', fontWeight: '700', textAlign: 'left'
    },
    boxstudentlist:{
         margin: '0px 15px 15px 15px ',width: '68.7% '
    }

});
export default BatchManagementTheme;
import "@fontsource/comfortaa"
import "@fontsource/poppins"

const ProfileMidSecTheme = (theme) => ({
    bestbox: {
        display: 'flex',
        flexDirection: 'column',


    },
    bestTypography: {
        textAlign: 'center',
        fontWeight: '700',
        mt: 8,
        mb: 5
    },
    lorem: {

        marginLeft: '25%',
        width: '900px',
        textAlign: 'center',
        height: '39px',
        top: '320px',
        left: '420px',
        gap: '0px',
        opacity: '0px',
        mb: 10,
        color: 'rgba(200, 200, 200, 1)',

    },

    //box for containing the left text cards
    leftcards: {

        width: '60%',
        height: '(492px)',
        display: 'flex',
        gridTemplateColumns: '1fr 1fr', // 2 columns with equal width
        justifyContent: 'space-around',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '30px',
        marginLeft: '25%',
        gap: '60px',
    },
    card1:{
      boxShadow:'0px 0px 51px rgba(0, 0, 0, 0.06)'  
    },
    card2:{
        border:'1px solid rgba(82, 95, 225, 0.16)'
    },
    title:{
        fontFamily:'Poppins'

    },

    box1card: {
        width: '64px',
        height: '64px',
        borderRadius: '13px',
        backgroundColor: 'rgba(152,72,255,1)',
        marginTop: '18px',
        marginLeft: '40%',
        transition: '0.5s all',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    //   boxShadow:'0px 0px 10px red'

    },
    box2card: {
        width: '64px',
        height: '64px',
        borderRadius: '13px',
        marginTop: '18px',
        backgroundColor: 'rgba(255, 96, 168, 1)',
        marginLeft: '40%',
        transition: '0.5s all',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    box3card: {
        width: '64px',
        height: '64px',
        borderRadius: '13px',
        marginTop: '18px',
        backgroundColor: 'rgba(167, 206, 74, 1)',
        marginLeft: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.5s ease-in-out',
        
    },
    box4card: {
        width: '64px',
        height: '64px',
        borderRadius: '13px',
        marginTop: '18px',
        backgroundColor: 'rgba(255, 207, 89, 1)',
        marginLeft: '40%',
        display: 'flex',
        justifyContent: 'center',
        transition: '0.5s ease-in-out',
        
    },
    programbox: {
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        // width:'900px',
        // marginLeft: '9%',
        marginTop: '2%',
    },
    //box media cards

    mainbox: {
        width: '1120px',
        height: '548px',
        borderRadius: '13px, 0px ,0px',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '15%',
        marginTop: '5%',
        gap: '20px',
    },

    cardtransition: {
        transition: 'transform 0.3s ease-in-out', // add transition effect
        '&:hover': {
            transform: 'scale(1.1)', // scale up on hover
        },
        transition: 'transform 0.3s ease-in-out', // add transition effect
        '&:hover': {
            transform: 'scale(1.1)', // scale up on hover
        },
    },
    lastboxctn: {
        display: 'flex', flexDirection: 'row', width: '80%', marginLeft: '13%', mb: '4'
    },
    namesbox: {
        marginLeft: '4%', width: '50%',
        justifyContent: 'space-around', marginTop: '5%', marginLeft: '25%'
    },
    name: {
        fontSize: '15px', fontWeight: '700'
    },
    position: {
        fontSize: '11px',
        fontWeight:'600',
    }






})

export default ProfileMidSecTheme;
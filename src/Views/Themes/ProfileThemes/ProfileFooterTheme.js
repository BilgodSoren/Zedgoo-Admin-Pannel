

const ProfileFooterTheme = (theme) =>({

    mainbox:{
        backgroundColor:'rgba(42, 41, 39, 1)',color:'white',alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between',height:'60vh',width:'100%'
    },

    //zedgoofooter contents

    iconsbox:{
        display:'flex',justifyContent:'space-around', width:'80%',mt:3
    },
  iconhover:{
    color:'white',transition:'0.5s all',"&:hover" :{color: 'orange '}
  },
  headingtext:{
    fontSize:'18px', mb:3
  },
 subtexts:{
    fontSize:'12px',mb:1,opacity:'0.6'
  },
  subscribe:{
    fontWeight:'600',textAlign:'left',mb:1
  },
  emailfield:{
    '& .MuiInputBase-input':{color:'white'},width:'100%', marginBottom:'10px'
  },
  subscribebtn:{
    width:'100%',backgroundColor:'orange',padding:'15px'
  }
})
export default ProfileFooterTheme;
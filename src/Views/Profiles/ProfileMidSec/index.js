import * as React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import desk from '../desk.png'
import e from '../e.jpg'
import w from '../w.jpg'
import { orange } from '@mui/material/colors';
import { hover } from '@testing-library/user-event/dist/hover';
import { useTheme } from '@emotion/react';
import ProfileMidSecTheme from '../../Themes/ProfileThemes/profileMidSecTheme';




const ProfileMidSection = () => {


	const theme = useTheme();
	const styles = ProfileMidSecTheme(theme);
	return (
		// first main box
		<Box>

			{/* box for containing the above text */}
			<Box sx={styles.bestbox}>
				<Typography variant="h3" color={'orange'} sx={styles.bestTypography}>Why we are  best?</Typography>
				<Typography width={100} variant="h6"
					sx={styles.lorem}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</Typography>
			</Box>

			{/* box for containing the  left text xards*/}
			<Box sx={styles.leftcards}>


				<Box>

					<Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'15%'}>
						<Card sx={styles.card1}>
							<Box sx={styles.box1card} />
							<CardHeader sx={styles.title} title="Digital Platform" />

							<Typography variant="body2" color="textSecondary" component="p" textAlign={'center'}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
							</Typography>
							<CardContent>
							</CardContent>
							<CardActions>

							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={3} marginRight={'15%'}>
						<Card sx={styles.card2}>
							<Box sx={
								styles.box2card} />
							<CardHeader sx={styles.title} title="Effective Interaction" />

							<Typography variant="body2" color="textSecondary" component="p" margin={'5px'}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
							</Typography>
							<CardContent>
							</CardContent>
							<CardActions>

							</CardActions>
						</Card>
					</Grid>
				</Box>

				<br></br>

				{/* right column content of mid section |*/}
				<Box>
					<Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'15%'}>
						<Card sx={styles.card2}>
							<Box sx={
								styles.box3card} />
							<CardHeader sx={styles.title} title=" Optimal Ideation" />
							<Typography variant="body2" color="textSecondary" component="p" margin={'5px'}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
							</Typography>
							<CardContent>
							</CardContent>
							<CardActions>

							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={3} display={'flex'} marginRight={'15%'} sx={{
						transition: 'ease-in-out 0.5s',
						'&hover': {
							backgroundColor: 'rgba(255, 207, 89, 1)',
						}
					}}>
						<Card sx={styles.card2}>
							<Box sx={styles.box4card} />
							<CardHeader sx={styles.title} title="Reliable" />
							<Typography variant="body2" color="textSecondary" component="p" margin={'5px'}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
							</Typography>
							<CardContent>
							</CardContent>
							<CardActions>

							</CardActions>
						</Card>
					</Grid>
				</Box>

				{/* content of box after the mid section  image cards        */}


			</Box>

			<Box sx={styles.programbox}>
				<Typography ml={15} display={'flex'} flexDirection={'row'} justifyContent={'center'}>

					<Typography sx={styles.bestTypography} variant='h2' color={'orange'}>Our  </Typography> <Typography sx={styles.bestTypography} ml={5} variant='h2' color={'black'}>Programs </Typography>
				</Typography>
				<Typography ml={15} variant='subtitle2' color={'grey'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</Typography>

				<Box
					sx={styles.mainbox} >

					<Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'1%'} width={'50%'} >
						<Card sx={{
							boxShadow: '0px 4px 30px grey',

						}}>
							<CardMedia
								component="img"
								height="140"
								image={desk}
								sx={styles.cardtransition}

							/>
							<CardHeader title="UI/UX Programs" />
							<Typography variant="body2" color="textSecondary" component="p" textAlign={'center'} m={1}>
								Zedgoo offers UI/UX Programs that can be accessed online, making learning convenient and accessible. With a wide range of courses, experienced instructors, and a large student community,
							</Typography>
							<CardContent>
							</CardContent>
							<CardActions>

							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'1%'} width={'50%'} >
						<Card sx={{ boxShadow: '0px 4px 30px grey' }}>
							<CardMedia
								component="img"
								height="140"
								image={e}
								sx={
									styles.cardtransition
								}

							/>
							<CardHeader title=" Programs" />
							<Typography variant="body2" color="textSecondary" component="p" textAlign={'center'} m={1}>
								Zedgoo offers UI/UX Programs that can be accessed online, making learning convenient and accessible. With a wide range of courses, experienced instructors, and a large student community,
							</Typography>
							<CardContent>
							</CardContent>
							<CardActions>

							</CardActions>
						</Card>
					</Grid>


					<Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'1%'} width={'50%'}>
						<Card sx={{ boxShadow: '0px 4px 30px grey' }}>
							<CardMedia
								component="img"
								height="140"
								image={w}
								sx={styles.cardtransition}
							/>
							<CardHeader title=" Programs" />
							<Typography variant="body2" color="textSecondary" component="p" textAlign={'center'} m={1}>
								Zedgoo offers UI/UX Programs that can be accessed online, making learning convenient and accessible. With a wide range of courses, experienced instructors, and a large student community,
							</Typography>
							<CardContent>
							</CardContent>
							<CardActions>

							</CardActions>
						</Card>
					</Grid>


				</Box>

			</Box>
			{/* last content */}
			<Box>
				<Typography fontWeight={800} textAlign={'center'} variant='subtitle1' color={'orange'}>Testimonial</Typography>

				{/* last box content  */}
				<Box sx={styles.lastboxctn}>
					<CardContent>
						Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors, and have a community of 10,000+ students.
					</CardContent>
					<CardContent>
						Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors, and have a community of 10,000+ students.
					</CardContent>
					<CardContent>
						Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors, and have a community of 10,000+ students.
					</CardContent>
				</Box>
				<Box display={'flex'} flexDirection={'row'} sx={styles.namesbox}>
					<Box display={'flex'} flexDirection={'column'}>
						<Typography sx={styles.name}>Roboto Eorure</Typography>
						<Typography sx={styles.position} >Web Developer</Typography>
					</Box>
					<Box display={'flex'} flexDirection={'column'}>
						<Typography sx={styles.name}>Roboto Eorure</Typography>
						<Typography sx={styles.position}>Web Developer</Typography>
					</Box>
					<Box display={'flex'} flexDirection={'column'}>
						<Typography sx={styles.name}>Roboto Eorure</Typography>
						<Typography sx={styles.position}>Web Developer</Typography>
					</Box>
				</Box>
				<Box mt={10}>
					<Typography fontWeight={800} textAlign={'center'} mb={4} variant='subtitle1' color={'orange'}>Read More</Typography>

				</Box>
			</Box>
		</Box>
	);
};

export default ProfileMidSection;

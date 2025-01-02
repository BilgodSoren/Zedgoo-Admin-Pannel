import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ChipCustomButton = ({ label, onDelete }) => (
    <Button
        variant="contained"
        onClick={onDelete}
        sx={{
            backgroundColor: 'rgba(42, 41, 39, 1)',
            color: 'white',
            height: '40px',
            borderRadius: '16px', // Rounded edges like a chip
            padding: '0 16px', // Padding to make it look like a chip
            '&:hover': {
                backgroundColor: 'rgba(42, 41, 39, 0.8)', // Slightly lighter on hover
            },
        }}
        endIcon={<CloseIcon />} // Optional icon
    >
        {label}
    </Button>
);

// Usage
const CustomButton = () => (
    <>
        <CustomButton label="Batch Z9183" onDelete={() => console.log('Delete')} />
        <CustomButton label="Batch Z9184" onDelete={() => console.log('Delete')} />
        <CustomButton label="Batch Z9185" onDelete={() => console.log('Delete')} />
    </>
);
export default CustomButton;
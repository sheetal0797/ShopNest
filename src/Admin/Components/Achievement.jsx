// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ThemeProvider, createTheme, styled, useTheme } from '@mui/material/styles'

// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
})



const Achievement = () => {
    // ** Hook
    const theme = useTheme()

    const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

    return (

        <Card sx={{ position: 'relative' }}>
            <CardContent>
                <Typography variant='h6' sx={{ letterSpacing: '0.25px' }}>
                    Shop With Zosh
                </Typography>
                <Typography variant='body2' >Congratulations 🥳</Typography>

                <Typography variant='h5' sx={{ my: 3.1, color: 'primary.main' }}>
                    420.8k
                </Typography>
                <Button size='small' variant='contained'>
                    View Sales
                </Button>
                <TrophyImg alt='trophy' src='https://media.istockphoto.com/id/1168757141/vector/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition.jpg?s=2048x2048&w=is&k=20&c=-0CWivvI3T3x7CwMJ-ywfiGS1r5278NYAfElHZtlk7E=' />
            </CardContent>
        </Card>


    )
}

export default Achievement;
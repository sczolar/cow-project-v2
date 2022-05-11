import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {
    console.log("asd", props)
    return (
        <Card sx={{ maxWidth: 300}}>
            <CardContent>
                <Typography variant="h5" component="div" style={{ display: "flex", alignItems: "center" }}>
                    <Avatar style={{ marginRight: "5px" }}>{props.name.charAt(0)}</Avatar>
                    {props.name}
                </Typography>
                <Typography color="text.secondary" style={{ marginTop: "8px" }}>
                    <b>negotiate price:</b>{props.price}
                </Typography>
                <Typography variant="body2">
                    <b>address:</b> {props.address}
                </Typography>
                <Typography variant="body2">
                    <b>phone number:</b><b size="small"> <i>{props.phonenum}</i></b>
                </Typography>
            </CardContent>
        </Card>
    );
}

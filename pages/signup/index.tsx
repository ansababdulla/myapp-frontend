import { Container, Box, Avatar, Typography, TextField, Button, Grid} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {blue, red} from '@mui/material/colors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


interface Data {
    data : SignUpData
}

interface SignUpData {
    status : string,
    userid : string
}
const theme = createTheme({
    palette : {
        primary : {
            main : blue[500]
        },
        secondary : {
            main : red[500]
        }
    }
});

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]  = useState("");

    const router = useRouter();

    const handleClick = (event : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        axios
            .post("http://localhost:3001/users/addUser", {
                name : name,
                email : email,
                password : password
            }).then((result : Data) => {
                if(result && result.data.status == "success") {
                    router.push("/login");
                } else {
                    alert("something went wrong");
                }
            })
    }
    return (
        <ThemeProvider theme = {theme}>
            <Container component="main" maxWidth="sm">
                <Box 
                    sx = {{
                        margin : 8,
                        display : "flex",
                        flexDirection : "column",
                        alignItems : "center"
                    }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                    <Box component="form" noValidate sx={{ mt: 1}}>                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange = {(e) => setName(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                        <Box 
                            sx = {{
                                display : "flex",
                                flexDirection : "column",
                                alignItems : "center"
                            }}
                        >
                        <Button
                            type = "submit"
                            fullWidth
                            variant = "contained"
                            sx = {{ mt : 3 , mb : 2}}
                            onClick = {handleClick}
                        >
                            Sign Up
                        </Button>
                        </Box>
                        <Grid container>
                            <Grid item>
                                <Link href="/login" variant = "body2">
                                    {"Have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
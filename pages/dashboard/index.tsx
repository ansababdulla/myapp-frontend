import { Grid, Stack, TextField, List, ListItem, ListItemText, Divider, ListItemIcon, Box, Typography, AppBar, Toolbar, IconButton, Button, Link, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { orange, red } from "@mui/material/colors";
import MenuIcon from '@mui/icons-material/Menu';
import { Chart } from '../../src/components/Chart/index';
import { stringify } from "querystring";
import axios from "axios";
import { useEffect, useState } from "react";

interface data {
    id : number,
    name : string,
    date : string,
    shipTo : string,
    paymentMethod : string,
    saleAmount : string
}


export default function Dashboard() {

    const [orders, setOrders] = useState<data>();

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper'
      };

    useEffect(() => {
        axios
            .get("http://localhost:3001/orders/getAllOrders")
            .then((result) => {
                setOrders(result.data);
            });
    }, []);

    return (
        <Grid container component = "main" sx = {{height : "100vh"}}>
            <Grid item sm = {2} >
                <Box sx = {{width : 1, height : "9%", pl : "80%", pt : "10%"}}>
                    <ArrowBackIosIcon/>
                </Box>
                <Divider light/>
                <List style = {style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button >
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Integrations" />
                    </ListItem>
                    <Divider light/>
                    <Typography  align = "center" mt = {2} mb = {2}>
                        Saved Reports
                    </Typography>
                    <ListItem button>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Current Month" />
                    </ListItem>
                    <ListItem button >
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Last Item" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                        <ListItemText primary="Year End Sale"/>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={10} sx = {{backgroundColor : "#e6e3de"}}> 
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Grid container xl = {12}>
                    <Grid item mr = {5} ml = {5} mt = {5}>
                        <Box sx = {{width : 900, height :250, borderRadius : 1, backgroundColor : "#fff"}}>
                        </Box>
                    </Grid>
                    <Grid item mr = {5} ml = {5} mt = {5}>
                        <Box sx = {{width : 200, height :250, borderRadius : 1, backgroundColor : "#fff"}}>
                            <Typography sx = {{
                                    fontFamily : "Roboto", 
                                    fontWeight : 'bold', 
                                    fontSize : "1.25rem", 
                                    color : "#1976d2",
                                    ml : 2,
                                    pt : 2
                                }}>
                                Recent Deposits
                            </Typography>
                            <Typography sx = {{
                                    fontFamily : "Roboto", 
                                    fontWeight : 'light', 
                                    fontSize : "2.25rem", 
                                    color : "#040404",
                                    ml : 2
                                }}>
                                $3024.00
                            </Typography>
                            <Typography sx = {{
                                    fontFamily : "Roboto", 
                                    fontWeight : '10', 
                                    fontSize : "1.25rem", 
                                    color : "#aba7a7",
                                    ml : 2,
                                    pb : 6
                                }}>
                                on 15 Mar 2010
                            </Typography>
                            <Typography sx = {{
                                    fontFamily : "Roboto", 
                                    fontWeight : '10', 
                                    fontSize : "1.25rem", 
                                    color : "#aba7a7",
                                    ml : 2, 
                                }} 
                                >
                               <Link href="#">view balance</Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            <Grid container xl = {12}>
                <Box sx = {{
                    width : 1180, 
                    height : 285,
                    borderRadius : 1, 
                    backgroundColor : "#fff",
                    ml : 5,
                    mt : 5}}>
                    <Typography sx = {{
                            fontFamily : "Roboto", 
                            fontWeight : 'bold', 
                            fontSize : "1.25rem", 
                            color : "#1976d2",
                            ml : 2,
                            pt : 2
                        }}>
                        Recent Orders
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx = {{minWidth : 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                   <TableCell><b>Date</b></TableCell> 
                                   <TableCell><b>Name</b></TableCell> 
                                   <TableCell><b>Ship To</b></TableCell> 
                                   <TableCell><b>Payment Method</b></TableCell> 
                                   <TableCell><b>SaleAmount</b></TableCell> 
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders?.map((order) => (
                                    <TableRow key = {order.id}>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.name}</TableCell>
                                        <TableCell>{order.shipTo}</TableCell>
                                        <TableCell>{order.paymentMethod}</TableCell>
                                        <TableCell>{order.saleAmount}</TableCell>
                                    </TableRow> 
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
            </Grid>
        </Grid>
    );
}
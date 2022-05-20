import { Box, Button, Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import {Logout} from "@mui/icons-material"
import { ReservationContext } from "../App";
import { useNavigate } from "react-router-dom";
let data = 
{ 
    titles:["From","To","FullName","Phone","Email","Marque","Serie","Year","Image"],
    rows:[]
 }
export default function AdminPanel(){
    const navigate = useNavigate();
    const gestion = React.useContext(ReservationContext);
    const reservations = gestion.getReservations();
    const open = () =>{
        window.open(localStorage.getItem('image'),'_blank');
    }
    const logout = () =>{
        navigate('/');
    }
   
    return(
        <Box>
            <Stack flexDirection={"row-reverse"}>
                <Button sx={{color:"red",fontFamily:"Poppins",fontWeight:"bold"}} onClick={logout}>
                    <Logout />
                     LOGOUT
                </Button>
            </Stack>
           <Table>
                <TableHead>
                    <TableRow>
                        {data.titles.map(title =>(
                            <TableCell>{title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reservations.map(res=>(
                        <TableRow>
                            <TableCell>{res.From}</TableCell>
                            <TableCell>{res.To}</TableCell>
                            <TableCell>{res.FullName}</TableCell>
                            <TableCell>{res.Phone}</TableCell>
                            <TableCell>{res.Email}</TableCell>
                            <TableCell>{res.car.marque}</TableCell>
                            <TableCell>{res.car.serie}</TableCell>
                            <TableCell>{res.car.year}</TableCell>
                            <TableCell>
                                <img  width={"100"} height={"50"} src={res.Cin} alt={"Cin"}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
           </Table>
        </Box>
    )
}
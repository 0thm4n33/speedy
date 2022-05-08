import { Box, Button, Card, CardContent,CardMedia,Stack,TextField } from "@mui/material";
import logo from "../assets/logo.svg";
import React, { useState } from "react";
import BackButton from "../components/buttonBack";
import { ReservationContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function AuthenticationPage(){
    const navigate = useNavigate();
    const gestion = React.useContext(ReservationContext);
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleOnChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setUser({...user,[name]:value})
    }

    const handleOnSubmit = () => {
        console.log(user.password,user.email);
        const isAuth = gestion.authenticate(user);
        isAuth === true && navigate('/admin/panel');
    }

    return(
        <Box height={"70vh"} display={"flex"} flexDirection={"column"}>
            <Box >
                <BackButton />
            </Box>
            <Box 
                sx={{height:{md:"95%",xs:"55%"},padding:"10px"}} 
                display={"flex"} 
                alignItems={"center"} 
                justifyContent={"center"} 
                >
                <Card sx={{padding:"20px",width:{md:"40%"}}}>
                    <CardMedia component={"img"} src={logo} />
                    <CardContent>
                        <Box sx={{display:"flex",flexDirection:"column",borderTop:"3px solid red"}}>
                            {["Email","Password"].map((field)=>(
                                field === "Password" ? 
                                    <TextField label={field} name={"password"} value={user.password} onChange={handleOnChange} type={"password"} sx={{margin:"15px"}} /> :
                                    <TextField label={field} name={"email"} value={user.email} onChange={handleOnChange} type={"text"} sx={{margin:"15px"}}/>
                            ))}
                        </Box>
                    </CardContent>
                    <Stack flexDirection={"row-reverse"}>
                            <Button 
                                sx={{backgroundColor:"red",fontFamily:"Poppins",color:"white",width:"20%","&:hover":{color:"black"}}}
                                onClick={handleOnSubmit}
                                >
                                    Login
                            </Button>
                    </Stack>
                </Card>
            </Box>
        </Box>
    )
}
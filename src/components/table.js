import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";

export default function TableComponenet({ data,width }){
    console.log(data)
    return(
        <TableContainer component={"paper"}>
            {data !== undefined &&
            <Table sx={{width:width}}>
                <TableHead>
                    <TableRow sx={{backgroundColor:"#E8E8E8"}}>
                        {data.titles !== undefined && 
                            data.titles.map(title=>(
                            <TableCell sx={{display:"flex",gap:"5px"}}>
                                {title.icon} 
                                <Typography sx={{
                                    display:"inline",
                                    fontFamily:"Poppins",
                                    fontWeight:"bold",
                                }}>
                                    {title.title}
                                </Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.rows !== undefined && data.rows.map(row =>(
                        <TableRow>
                            {row.map(col=>(
                                <TableCell sx={{fontFamily:"Poppins",fontWeight:"bold",fontSize:"medium"}}>
                                    {col}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            }
        </TableContainer>
    )
}
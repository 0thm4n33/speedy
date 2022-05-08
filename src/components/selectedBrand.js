import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

export default function SelectedBrand({brands,brand,handleOnChange}){
    return(
    <FormControl>
            Brand:
        <Select onChange={handleOnChange} value={brand}>
            {brands.map(brand=>(
            <MenuItem key={brand.name} value={brand.name}>
                <Box display={"flex"}>
                    <Box component={"img"} src={require(`../assets/logos/${brand.icon}`)} marginRight={"8px"} width={"24px"}/>
                    <Typography>{brand.name}</Typography>
                </Box>
            </MenuItem>
            ))}
        </Select>
    </FormControl>
    )
}
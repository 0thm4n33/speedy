import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export default function LabelTextField({type,label,icon,style,value,onChange}){
    return(
        <TextField 
            className={style}
            label={label}
            type={type}
            onChange={onChange}
            value={value}
            name={label}
            InputProps={{
                startAdornment:(
                    <InputAdornment>
                        {icon}
                    </InputAdornment>
                )
            }}
        />
    )
}
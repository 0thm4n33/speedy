import { InputAdornment, TextField } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";

export default function LabelTextField({type,label,icon,style,value,onChange}){
    return(
            type !== "file" ?
                <TextField 
                id={label}
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
                }} /> :
                <label style={{margin:"10px"}}>
                    Image:
                    <input style={{padding:"5px"}} type={"file"} id="Cin" onChange={onChange} />
                </label>
    )
}
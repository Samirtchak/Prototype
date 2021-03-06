import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SearchBar from "./SearchBar";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function Navbar(){
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', display:"flex", flexDirection:"row",backgroundColor:"darkgrey",flexWrap:"wrap" }}>
            <SearchBar/>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                <LinkTab label="Home" href="/home" />
                <LinkTab label="About" href="/trash" />
                <LinkTab label="Register" href="/form/" />
            </Tabs>
        </Box>
    );

}
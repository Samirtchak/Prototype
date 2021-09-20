import * as React from 'react';
import {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CompanyCard from "./CompanyCard";
import BusinessPage from "../Page/BusinessPage";



const axios = require('axios').default;

export default function CompanyCardLayout() {

    const[companyInfo,setCompanyInfo] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [company, setCompany] = useState({});



    useEffect(() =>{getCompanyInfo();},[selectedCompany]);


    const show = (id) => {
        console.log(id);
    }

    const getCompanyInfo = async () => {
        try{
            const response = await axios.get("http://143.198.37.59:3003/getdata");
            setCompanyInfo(response.data);
            console.log(selectedCompany);

        }
        catch(err) {
            console.log(err);
        }
    }



            if(selectedCompany == null) {
                return (
                    <Box sx={{flexGrow: 1, margin: 5}}>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                            {companyInfo.map(
                                item => <CompanyCard
                                    key={item._id}
                                    id={item._id.$oid}
                                    name={item.businessName}
                                    location={item.address}
                                    desc={item.description}
                                    company={item}
                                    textImage={item.image}
                                    click={setSelectedCompany}/>)}
                        </Grid>
                    </Box>);
            } else{
                return <BusinessPage id={selectedCompany._id} company={selectedCompany}  />
            }

        }


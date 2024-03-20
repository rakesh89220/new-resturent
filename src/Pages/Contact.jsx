import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
function Contact() {
  return (
    <Layout>
      <Box sx={{my:5,ml:10, "& h4":{ fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          accusamus earum sequi reprehenderit voluptatem officia aut nulla
          obcaecati mollitia enim impedit, deserunt odio! Obcaecati iusto
          cupiditate possimus quo suscipit voluptates?
        </p>
      </Box>
      <Box sx={{m: 3,width:"600px",ml:10,"@media (max-width:600px)": {
        width:"300px",
      } }}>
        <TableContainer component={Paper}>
          <Table aria-aria-label="contact table">
            <TableHead>
             <TableRow>
              <TableCell  sx={{bgcolor:"black",color:"White",}}align="center">Contact Details</TableCell>
             </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                <SupportAgentIcon sx={{color:"red",pt:1}}/> 1800-00-0000 (Toll Free)
                </TableCell>
                
              </TableRow>
              <TableRow>
              <TableCell>
                <EmailIcon sx={{color:"skyblue",pt:1}}/> help p@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <CallIcon sx={{color:"green",pt:1}}/> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}

export default Contact;

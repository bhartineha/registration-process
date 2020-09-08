import React, { useContext } from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function ListItems() {
    const { finalData } = useContext(multiStepContext);
    return (
        <div>
            <TableContainer style={{display:'flex', justifyContent:'center'}}>
                <Table border="1" style={{width:'70%', justifyContent:'center'}} size="small">
                   <TableHead>
                       <TableRow style={{backgroundColor:'burlywood', color:'aliceblue'}}>
                           <TableCell>First Name</TableCell>
                           <TableCell>Last Name</TableCell>
                           <TableCell>Contact</TableCell>
                           <TableCell>Email</TableCell>
                           <TableCell>Role</TableCell>
                           <TableCell>Company</TableCell>
                           <TableCell>State</TableCell>
                           <TableCell>Country</TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>
                       {finalData.map((data) => (
                           <TableRow key={data.email}>
                               <TableCell>{data.firstName}</TableCell>
                               <TableCell>{data.lastName}</TableCell>
                               <TableCell>{data.contact}</TableCell>
                               <TableCell>{data.email}</TableCell>
                               <TableCell>{data.role}</TableCell>
                               <TableCell>{data.company}</TableCell>
                               <TableCell>{data.curState}</TableCell>
                               <TableCell>{data.curCountry}</TableCell>


                           </TableRow>
                    ))}
                   </TableBody>
                </Table>
               

            </TableContainer>
        </div>
    )
}

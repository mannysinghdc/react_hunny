import { useContext } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'
import { CurdContext } from '../../../store/Curd-Item';

const Read = () => {
    const { data ,editHandler,deleteHandler} = useContext(CurdContext)
    return (
        <>
            {
                data.length == 0 ? <h2 className='text-center'>No data are avaiable</h2>
                    :
                    <div className="container shadow-4">
                        <MDBTable hover align='middle'>
                            <MDBTableHead>
                                <tr>
                                    <th scope='col'>SNo.</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Age</th>
                                    <th scope='col'>Date</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    data.map((item, i) => (
                                        <tr key={i} className='table-primary'>
                                            <td>
                                                <p className='fw-normal mb-1'>{i + 1}</p>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='ms-3'>
                                                        <p className='fw-bold mb-1'>{item.name}</p>
                                                        <p className='text-muted mb-0'>{item.email}</p>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <p className='fw-normal mb-1'>{item.age}</p>
                                            </td>
                                            <td>{item.date}</td>
                                            <td>
                                                <MDBBtn color='link' rounded size='sm' onClick={()=>editHandler(item.id)}>Edit </MDBBtn>
                                                <MDBBtn color='danger' rounded size='sm' onClick={()=>deleteHandler(item.id)}>Delete </MDBBtn>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </MDBTableBody>
                        </MDBTable>
                    </div>
            }
        </>

    );
}

export default Read
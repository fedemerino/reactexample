import data from '../assets/data'
import { DataGrid } from '@mui/x-data-grid';
import customToolbar from '../assets/customToolbar';
export const Reportes = () => {

    const rows = data.map((item, index) => ({
        id: index + 1,
        ...item,
    }))

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'age', headerName: 'Age', width: 100 },
        { field: 'address', headerName: 'Address', width: 300 },
        { field: 'city', headerName: 'City', width: 150 },
    ]

    return (
        <div className='tableContainer'>
            <DataGrid rows={rows} columns={columns} slots={{ toolbar: customToolbar }}  />
        </div>
    )
}

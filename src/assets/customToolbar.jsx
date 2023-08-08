import { GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid';
import { ExportToCsvButton} from '../assets/ExportToCSVButton'
const customToolbar = () => {
  return (
    <GridToolbarContainer>  
      <GridToolbarExport
      // sx={{
      //   color:'white'
      // }}
        csvOptions={{
          fileName: 'customerDataBase',
          delimiter: ';'
        }}
      />
      <GridToolbarFilterButton />
      <GridToolbarColumnsButton />
       <ExportToCsvButton /> 
    </GridToolbarContainer>
  );
}

export default customToolbar;
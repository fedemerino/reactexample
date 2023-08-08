import { useGridApiContext } from '@mui/x-data-grid';
import { Button } from '@mui/material'

export const ExportToCsvButton = () => {
  const apiRef = useGridApiContext();

  const handleClick = () => {
    if (window.confirm("Estás seguro que deseas exportar a CSV?")) {
      apiRef.current.exportDataAsCsv();
    }
  };

  return <Button onClick={handleClick}>Export to CSV</Button>;
};
import { Container, Spinner } from '@chakra-ui/react';
import { ThemeProvider } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Currency } from 'src/models';
import { theme } from 'src/style';
import { getListCurrency } from './services/getCurrency';

export default function TableCripto() {
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [amount, setAmount] = useState(0)
  const [staticData, setStaticData] = useState<Currency[]>([])

  const { data, isLoading, refetch } = useQuery(['certificationsNinja'], () => getListCurrency({ start: amount, limit: 100 }), {
    refetchOnWindowFocus: true,
  })


  useEffect(() => {
    refetch()
  }, [amount])
  useEffect(() => {
    if (data) setStaticData(old => old.concat(data))
  }, [data])

  const colums: GridColDef[] = [
    {
      field: 'symbol',
      headerName: 'Símbolo',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'name',
      headerName: 'Nombre',
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'price_usd',
      headerName: 'Precio USD',
      headerAlign: "right",
      align: "right",
      minWidth: 100,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'rank',
      headerName: 'Puesto',
      align: "center",
      headerAlign: "center",
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  ];

  function moreCurrency(page: number) {
    if (data && (page + 1) * rowsPerPage === (data.length + amount)) {
      setAmount(old => old + data.length)
    }
  }

  if (isLoading) return <Spinner size='xl' />
  if (!data) return <p>error get currencies</p>
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <DataGrid
            rows={staticData}
            columns={colums}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={rowsPerPage}
            rowsPerPageOptions={[5, 7, 10]}
            onPageSizeChange={e => setRowsPerPage(e)}
            getRowId={(row: any) => row.id}
            onPageChange={e => moreCurrency(e)}
          />
        </Container>
      </ThemeProvider>
    </>
  )
}

import './index.css'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DeleteProperty from '../property/delete_property'

export default function ListingTable() {
  const [rowsPerPage, setRowsPerPage] = useState([])
  const [pageSize, setPageSize] = useState(10)
  const [tableRows, setTableRows] = useState([])
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  const navigate = useNavigate()

  function isJsonString(str) {
    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }
    return true
  }

  const getProperties = () => {
    axios.get(`http://localhost:1055/api/properties/list`).then((response) => {
      if (response.data.status === 200) {
        let data = response.data.data.map((item) => {
          return {
            ...item,
            configuration: JSON.parse(item.configuration),
            area: JSON.parse(item.area),
            property_image: isJsonString(item.property_image)
              ? JSON.parse(item.property_image)[0]
              : item.property_image,
          }
        })

        data = data.map((item, index) => {
          let pricePerSq = item.price / parseInt(item.area.area_of_main_home)
          let aduPrice = 1200 * 350
          let newSize = 1200 + parseInt(item.area.area_of_main_home)
          let newEstimatedValue = Math.ceil(newSize * pricePerSq)
          let mhServicesFee = Math.ceil((newEstimatedValue / 100) * 10)
          let wholePrice = mhServicesFee + aduPrice + parseInt(item.price)
          return {
            ...item,
            index: index + 1,
            wholePrice: wholePrice,
            area: [
              `Area of property: ${item.area.area_of_property} sq.ft.`,
              `Area of Main home: ${item.area.area_of_main_home} sq.ft.`,
              `Area of ADU: ${item.area.area_of_ADU} sq.ft.`,
            ],
            configuration: [
              `Main House - ${item.configuration.main_house_bed} Beds, ${item.configuration.main_house_bath} Baths`,
              `ADU - ${item.configuration.adu_bed} Beds, ${item.configuration.adu_bath} Baths.`,
            ],
            year_built: item.year_built
              ? new Date(item.year_built).getUTCFullYear()
              : '2015',
          }
        })
        setDeleteSuccess(false)
        setTableRows(data)
      }
    })
  }

  useEffect(() => {
    if (tableRows.length < 1 || deleteSuccess) {
      getProperties()
    }
  }, [tableRows.length, deleteSuccess])

  const [deleteId, setDeleteId] = useState(null)

  const deleteClick = (userId) => {
    setDeleteId(userId)
  }

  const columns = [
    {
      field: 'index',
      headerName: 'S. no.',
      minWidth: 100,
    },
    {
      field: 'title',
      headerName: 'Title',
      minWidth: 150,
    },
    {
      field: 'description',
      headerName: 'Description',
      minWidth: 200,
    },
    {
      field: 'property_image',
      headerName: 'Property Image',
      minWidth: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      minWidth: 150,
    },
    {
      field: 'area',
      headerName: 'Area',
      minWidth: 200,
    },
    {
      field: 'configuration',
      headerName: 'configuration',
      minWidth: 200,
      accessor: 'created_date',
    },
    {
      field: 'year_built',
      headerName: 'Year Built',
      minWidth: 100,
    },
    {
      field: 'security',
      headerName: 'Security',
      minWidth: 120,
    },
    {
      field: 'kid_safe',
      headerName: 'Kid Safe',
      minWidth: 120,
    },
    {
      field: 'parking',
      headerName: 'Parking',
      minWidth: 100,
    },
    {
      field: 'top_amenities',
      headerName: 'Top Amenities',
      minWidth: 170,
    },
    {
      field: 'amenities',
      headerName: 'Amenities',
      minWidth: 170,
    },
    {
      field: 'address',
      headerName: 'Address',
      minWidth: 150,
    },
    {
      field: 'city',
      headerName: 'City',
      minWidth: 80,
    },
    {
      field: 'country',
      headerName: 'Country',
      minWidth: 80,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Action',
      minWidth: 80,
      flex: 1,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon sx={{ color: '#B7345C' }} />}
          className="delete_modal_button"
          label="Delete"
          sx={{ color: '#B7345C' }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModalToggle7"
          onClick={() => {
            deleteClick(params.id)
          }}
          // onClick={deleteBanner(params.id)}
          showInMenu
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          className="edit_modal_button"
          label="Edit"
          onClick={(event) => navigate(`/edit-property/?item_id=${params.id}`)}
          showInMenu
        />,
      ],
    },
  ]

  return (
    <>
      <DeleteProperty
        modalId={'exampleModalToggle7'}
        modalLabel={'exampleModalToggleLabel7'}
        deleteId={deleteId}
        setDeleteSuccess={setDeleteSuccess}
      />
      <div className="listing_container manage_property_div">
        {tableRows && tableRows.length > 0 && (
          <DataGrid
            // rowHeight={150}
            getRowHeight={() => 'auto'}
            sx={{
              '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
                py: '8px',
              },
              '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
                py: '15px',
              },
              '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
                py: '22px',
              },
            }}
            rows={tableRows}
            columns={columns}
            getRowClassName={(params) =>
              `table-row--${params.row.active_status}`
            }
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            pageSize={pageSize}
            rowsPerPageOptions={rowsPerPage}
            disableColumnSelector
            sortingOrder={['asc', 'desc']}
          />
        )}
      </div>
    </>
  )
}

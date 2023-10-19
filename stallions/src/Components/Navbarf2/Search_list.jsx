import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import axios from 'axios';
import './Search_list.css'
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.2),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Search_list() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [searchDatas, getsearchDatas] = useState([])

    const searchData = (event) => {
        const name = event.target.name
        const value = event.target.value
        const searchQuery = { [name]: value }
        axios.post("http://127.0.0.1:8000/api/search_product_api", searchQuery).then((response) => {
            getsearchDatas(response.data.data)
            // console.log(response.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    console.log(searchDatas);

    return (
        <>

            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }} name='query' onChange={searchData}
                    />
                </Search>
            </Toolbar>


            <div>

                {
                    // searchDatas[0] ?
                    <>
                        {
                            searchDatas?.map((data, key) => (
                                <Link to={`/single_view/${data.id}`}>
                                    <div className="search_item ">
                                        <div className="search_img">
                                            <img src={`/clothes/${data.image}`} alt="" style={{ height: '38px' }} />
                                        </div>
                                        <div className='search_details'>
                                            <div>{data.productname} </div>
                                            <div>{data.category}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </>

                }


            </div>
        </>
    )
}

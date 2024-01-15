import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from "./../Navbar/Navbar"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { useState, useEffect } from 'react';
import axios from "axios"
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import TextField from '@mui/material/TextField';


export default function MediaCard() {

    const [data, setData] = useState("")
    const [word, setWord] = useState("")
    const [search, setSearch] = useState("")


    useEffect(() => {
        axios.get("http://localhost:8080/nahid").then((res) => {
            console.log(res.data);
            setData(res.data);
        }
        );
    }, [])
    console.log(search);




    return (
        <>
            <Navbar />
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={(e) => {
                        setWord(e.target.value);

                        setSearch(
                            data.filter((element) =>
                                element.name
                                    .toUpperCase()
                                    .includes(e.target.value.toUpperCase())

                            )

                        )
                    }
                    }
                />
            </Box>
            {/* {(word
                ? search : data).map((elem, i) => {
                
                })

            } */}

            <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 15, marginTop: 1 }}>
                {data && data.map((elem, i) => (

                    <Grid xs={6} md={4}>




                        <Card container spacing={1} key={i} sx={{ maxWidth: 405, border: "1px solid black", position: "relative" }}>

                            <CardMedia
                                sx={{ height: 200, width: 240, margin: "0 auto", marginTop: 4 }}
                                image={elem.image}
                                title="green iguana"
                            />
                            <CardContent  >
                                <FaRegHeart style={{ position: "absolute", top: 5, right: 5, fontSize: 20, cursor: "pointer", color: "red" }} />
                                <Typography gutterBottom variant="h5" component="div">
                                    {elem.username}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {elem.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {elem.about}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => {
                                    axios.delete(`http://localhost:8080/nahid/${elem.id}`).then((res) => {
                                        console.log(res.data);
                                    })
                                    setData(
                                        data.filter((item) => item.id != elem.id)
                                    );
                                }}
                                    style={{ backgroundColor: "red", color: "white", cursor: "pointer", borderRadius: "8px " }} size="small">Delete</Button>
                                <Button style={{ backgroundColor: "green", color: "white", cursor: "pointer", borderRadius: "8px " }} size="small"> Detail</Button>
                                <Button size="small"> <FaBasketShopping style={{ fontSize: 25 }} />
                                </Button>

                            </CardActions>
                        </Card>
                    </Grid>


                )
                )}
            </Box >


        </>

    );
}
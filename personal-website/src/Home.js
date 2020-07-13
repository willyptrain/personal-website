import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './styles.css'
import image from'./IMG_7135.jpeg'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


export default function Home() {

    const handleClick = (event) => {
        event.preventDefault();

    }


    return (
        <div>
            <div className="nav-bar">
                <Breadcrumbs  className="links" separator="|" aria-label="breadcrumb">
                  <Link className="links" href="" onClick={handleClick}>
                    Projects
                  </Link>
                  <Link className="links" href="" onClick={handleClick}>
                    Resume
                  </Link>
                  <Link className="links" href="" onClick={handleClick}>
                    Github
                  </Link>
                </Breadcrumbs>

            </div>


            <Grid container className="grid-container"
                  alignItems="center"
                  justify="center" spacing={0}>

                  <Grid item xs={11} sm={10} md={10} lg={10}>
                   <div className="container-home">
                        <img className="img" src={image}/>
                        <div className="title">Will Peterson</div>
                        <div className="background-color"></div>
                   </div>


                  </Grid>



            </Grid>

        </div>

    );


}
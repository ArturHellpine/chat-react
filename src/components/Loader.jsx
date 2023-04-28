import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid style={{height: window.innerHeight - 50}}
                  container
                  alignItems='center'
                  justifyContent='center'
            >
                <Grid container alignItems='center' direction='column'>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
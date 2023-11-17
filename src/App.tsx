import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      // the base and lg properties specify the layout for stadnard and large screens
      templateAreas={{
        // back ticks are need due to the multiple double quotes
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Gold
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

import { Box, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Books = () => {
    return (
        <>
            <Grid templateColumns={"repeat(3,1fr)"} textAlign={"center"}>
                <Box bg={"green.300"}>
                    <Link to={`/books/A`}>A</Link>
                </Box>
                <Box bg={"teal.300"}>
                    <Link to={`/books/B`}>B</Link>
                </Box>
                <Box bg={"purple.300"}>
                    <Link to={`/books/C`}>C</Link>
                </Box>
            </Grid>
        </>
    );
};

export default Books;

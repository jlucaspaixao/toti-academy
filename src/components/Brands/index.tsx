import { Box, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  const getData = () => {
    fetch(`https://toti-academy.cdn.prismic.io/api/v2/documents/search?ref=YP93ABAAACQAbaV0&type=brands`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box bg="black" py="90px">
      <Container>marcas</Container>
    </Box>
  );
};

export { Brands };

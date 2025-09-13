import { Box, Image } from "@chakra-ui/react";
import logotipo from "../../imgs/logomarca/logotipo.png";
import { Link } from "react-router-dom";
import { IoIosCart, IoMdHome, IoMdPerson } from "react-icons/io";

export default function Header() {
  return (
    <Box
      bg="aliceblue"
      boxShadow="0px 4px 6px #cacaca"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={{ base: 2, md: 4 }}
      height={{ base: "80px", md: "120px" }}
      // gap={3}
    >

      <Image
      src={logotipo}
      alt="Logotipo"
      width={{ base: "150px", md: "300px" }}
      height="auto"                         
      objectFit="contain"
      />


      <Box
        display="flex"
        alignItems="center"
        gap={{ base: 4, md: 6 }}
        fontSize={{ base: "24px", md: "30px" }}
      >
        <Link to="/"> <IoMdHome /> </Link>
        <Link to="/sobre"> <IoMdPerson /> </Link>
        <Link to="/carrinho"> <IoIosCart /> </Link>
      </Box>
    </Box>
  );
}

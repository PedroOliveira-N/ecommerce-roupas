import { Box, Image, Text, Card, CardBody, Heading, Stack, Button} from "@chakra-ui/react";

export default function Carrinho({ carro = [] , setCarro }) {

  const handleComprar = () => {
    alert("Compra Realizada")
  }

  const removerDoCarrinho = (id) => {
    setCarro((prevCarrinho) =>
      prevCarrinho
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const limparCarrinho = () => {
    setCarro([]);
  };


  return (
    <Box display="flex" justifyContent="center" alignItems="center" p={6}>
      {carro.length === 0 ? (
        <Text fontSize="lg" fontWeight="medium" color="gray.500">
          Seu carrinho está vazio.
        </Text>
      ) : (
        <Stack spacing={6} w="100%" maxW="600px">

          <Button
            colorScheme="green"
            alignSelf="flex-end"
            onClick={handleComprar}
            maxW="100%"
            w="100%"
          >
            Finalizar Compra
          </Button>

          <Button
            colorScheme="red"
            variant="outline"
            alignSelf="flex-end"
            onClick={limparCarrinho}
            maxW="100%"
            w="100%"
          >
            Esvaziar carrinho
          </Button>

          {carro.map((item) => (
            <Card
              key={item.id}
              direction={{ base: "column", md: "row" }}
              overflow="hidden"
              variant="outline"
              boxShadow="md"
              borderRadius="xl"
              _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
              transition="all 0.2s ease-in-out"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  w={{ base: "100%", md: "150px" }}
                  h="50%"
                  maxH="100%" 
                  objectFit="contain" 
                />
              )}

              <CardBody display="flex" flexDirection="column" justifyContent="center">
                <Heading size="md" mb={2}>
                  {item.name}
                </Heading>
                <Text fontSize="lg" color="gray.700" fontWeight="medium">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Quantidade: {item.quantity || 1}
                </Text>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => removerDoCarrinho(item.id)}
                >Remover Item</Button>
              </CardBody>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
}

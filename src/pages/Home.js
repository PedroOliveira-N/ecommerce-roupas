import { Box, Button, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import itensData from "../itens.json";

export default function Home({ carro, addAoCarrinho }) {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={4}>
        Produtos:
      </Heading>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {itensData.map((product) => (
          <VStack
            key={product.id}
            borderWidth="1px"
            borderRadius="xl"
            p={4}
            boxShadow="md"
            align="stretch"
          >
            <Box>
              <Image
                src={product.image}
                alt={product.name}
                maxH={{ base: "150px", md: "200px" }}
                mx="auto"
                objectFit="contain"
              />
            </Box>

            <Heading as="h2" size="md" mb={2} textAlign="center">
              {product.name}
            </Heading>

            <Text fontSize="lg" mb={3} textAlign="center">
              R$ {product.price.toFixed(2)}
            </Text>

            <Button
              colorScheme="green"
              onClick={() => addAoCarrinho(product)}
              borderRadius="xl"
              mt="auto"
              w="full"
            >
              Adicionar ao carrinho
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

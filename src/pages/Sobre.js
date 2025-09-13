import { Box, Stack, Text } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"


export default function Sobre () {
    return(
        <div>
            <Stack spacing={3} ml="5%" mr="5%" mt="3%">
                <Text letterSpacing={1} fontSize='2xl' textAlign="center" fontFamily={"cursive"}>
                    Há mais de uma década vestindo elegância com precisão.
                    A Traço Fino nasceu do desejo de unir estilo e qualidade em cada peça. 
                    Com um olhar apurado para o design simples e tecidos de alto padrão, 
                    construímos uma trajetória sólida no mercado da moda, conquistando clientes exigentes que valorizam o detalhe e a essência. 
                    Mais do que roupas, oferecemos experiências de vestir com leveza, personalidade e sofisticação
                </Text>

                <Text 
                fontWeight={5} 
                fontSize={30} 
                textAlign="center" 
                letterSpacing={1} 
                fontFamily={"cursive"}
                mt={5}
                >
                    Saiba Mais em Nossas Redes Sociais ou Fale Conosco no Whatsapp:
                    <br/>
                </Text>

                    <Box 
                    mt={5}
                    fontSize={43} 
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap={50}
                    >
                        <FaInstagram />
                        <FaFacebook />
                        <FaWhatsapp />
                        <FaTiktok />
                    </Box>

                 
            </Stack>
        </div>
    )
}
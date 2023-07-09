import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Box, CardBody, Card, CardFooter, CardHeader, Container, Heading, SimpleGrid, Text, Flex, HStack, Button, Divider, Avatar } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()

  // const boxStyles = {
  //   p: "10px",
  //   bg: "green.400",
  //   color: "white",
  //   m: "10px",
  //   textAlign: "center",
  //   filter: "blur(0.1px)",
  //   ':hover':{
  //     color: 'white',
  //     bg: 'green.200',
  //   }
  // }

  // return (
  //   <Container as="section" maxWidth="4xl" py="20px">
  //     <Heading my="30px" p="10px">
  //       Contoh Heading Chakra UI
  //     </Heading>
  //     <Text marginLeft="30px">
  //       Contoh Text Menggunakan Chakra UI
  //     </Text>
  //     <Text ml="30px" color="red.300" fontWeight="bold">
  //       Contoh Text Menggunakan Chakra UI
  //     </Text>

  //     <Box bg="blue.100" p="30px" color="magenta">
  //       penggunaan div di chakra UI
  //     </Box>

  //     <Box sx={boxStyles}>
  //       Hello Arif
  //     </Box>
  //   </Container>
  // )
  return (
  <SimpleGrid spacing={10} minChildWidth="300px">
    {tasks && tasks.map(task => (
      <Card key={task.id} borderTop="8px" borderColor="red.400" bg="white">
        <CardHeader>
          <Flex gap={5}>
            <Avatar src={task.img} />
            <Box w="50px" h="50px">
              <Text>
                AV
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="sm">{task.title}</Heading>
              <Text>by {task.author}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody color="gray.500">
            <Text>
              {task.description}
            </Text>
        </CardBody>

        <Divider borderColor="gray.200" />

        <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
        </CardFooter>
      </Card>
    ))}
  </SimpleGrid>
  
  )
}

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
}

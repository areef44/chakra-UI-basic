import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="red" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: 'white', bg:'red.400'}}>Account Info</Tab>
        <Tab _selected={{ color: 'white', bg:'red.400'}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
          <ListItem>
            <ListIcon as={EmailIcon}/>
            Email: supermario.dev
          </ListItem>
          <ListItem>
            <ListIcon as={ChatIcon}/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem sit culpa saepe magnam rem, dolor veritatis doloremque. Quisquam commodi beatae corporis dolores vel dolorem. Repellendus ipsum voluptate culpa animi quo.
          </ListItem>
          <ListItem>
            <ListIcon as={StarIcon}/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem sit culpa saepe magnam rem, dolor veritatis doloremque. Quisquam commodi beatae corporis dolores vel dolorem. Repellendus ipsum voluptate culpa animi quo.
          </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400"/>
            Lorem ipsum dolor sit amet.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400"/>
            Lorem ipsum dolor sit amet.
          </ListItem>
          <ListItem>
            <ListIcon as={WarningIcon} color="red.400"/>
           Lorem ipsum dolor sit amet.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400"/>
            Lorem ipsum dolor sit amet.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="teal.400"/>
            Lorem ipsum dolor sit amet.
          </ListItem>
          <ListItem>
            <ListIcon as={WarningIcon} color="red.400"/>
           Lorem ipsum dolor sit amet.
          </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

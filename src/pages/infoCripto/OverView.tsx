import { Avatar, Box, Button, Center, Container, HStack, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { logoutUser, selectUserData } from 'src/redux/slices/user'

export default function OverView() {
  const dispath = useDispatch()
  const user = useSelector(selectUserData)
  return (
    <>
      <Box as="header" padding={2} bgColor="blue.200">
        <Container maxW="container.lg" display="flex" gap={10} justifyContent="space-between">
          <HStack alignItems={"center"}>
            <Avatar name={user.fullName} />
            <Text>{user.fullName}</Text>
          </HStack>
          <Button colorScheme="blue" variant="solid" onClick={() => dispath(logoutUser())}>Logout</Button>
        </Container>
      </Box>
      <Center mt={10}>
        <Outlet />
      </Center>
    </>
  )
}

import {
  Center,
  Container,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { database, onValue, ref } from "@/lib/firebase";
import { useEffect, useState } from "react";

export const Leaderboards = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    onValue(ref(database, "players"), (snapshot) => {
      let tempList: any = [];
      let data = snapshot.val();
      for (let key in data) {
        tempList.push({
          name: data[key].name,
          score: data[key].score,
        });
      }

      // sort the temp list by score
      const sortedlist = tempList.sort((a, b) => b.score - a.score);
      setList(sortedlist);
    });
  }, []);
  return (
    <Container mt={10} justifyContent="center" alignItems="center">
      <Center>
        <Heading>Leaderboard</Heading>
      </Center>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>
            Try to get the highest score in the leaderboard!
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Player</Th>
              <Th>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {list.map((item: any) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.score}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

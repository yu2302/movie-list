import Movie from "./movies";
import { ChakraProvider , defaultSystem} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Movie />
    </ChakraProvider>
  );
}
export default App;


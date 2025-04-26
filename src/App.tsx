import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { LoyaltyProvider } from './context/LoyaltyContext';
import { LoyaltyProgram } from './pages/LoyaltyProgram';
import { Store } from './pages/Store';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <ChakraProvider>
      <LoyaltyProvider>
        <Router>
          <Box minH="100vh" bg="gray.50">
            <Navigation />
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/loyalty" element={<LoyaltyProgram />} />
            </Routes>
          </Box>
        </Router>
      </LoyaltyProvider>
    </ChakraProvider>
  );
}

export default App;

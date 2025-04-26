import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { LoyaltyProvider } from './context/LoyaltyContext';
import { LoyaltyProgram } from './pages/LoyaltyProgram';
import { Store } from './pages/Store';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoyaltyProvider>
        <Router>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Navigation />
            <Box flex="1">
              <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/loyalty" element={<LoyaltyProgram />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </LoyaltyProvider>
    </ChakraProvider>
  );
}

export default App;

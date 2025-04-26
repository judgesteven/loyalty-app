import React from 'react';
import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Avatar,
  Stack,
  Badge,
  useColorModeValue,
  Progress,
} from '@chakra-ui/react';
import { useLoyalty } from '../context/LoyaltyContext';
import { MissionCard } from '../components/MissionCard';
import { AchievementCard } from '../components/AchievementCard';
import { LevelProgress } from '../components/LevelProgress';
import { RewardCard } from '../components/RewardCard';
import { mockRewards } from '../services/mockData';

export const LoyaltyProgram: React.FC = () => {
  const {
    user,
    missions,
    achievements,
    points,
    level,
    loading,
    error,
    completeMission,
  } = useLoyalty();

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  if (loading) {
    return (
      <Container centerContent py={10}>
        <Text>Loading...</Text>
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent py={10}>
        <Text color="red.500">{error}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Grid templateColumns={{ base: '1fr', md: '400px 1fr' }} gap={8}>
        {/* Sidebar */}
        <Box>
          <Box
            bg={bgColor}
            p={6}
            borderRadius="lg"
            borderWidth="1px"
            borderColor={borderColor}
            boxShadow="sm"
          >
            <Stack gap={4} align="center">
              <Box
                p={4}
                borderRadius="xl"
                bg="brand.50"
                width="100%"
                textAlign="center"
              >
                <Avatar
                  size="2xl"
                  name="Jane Doe"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  borderWidth="3px"
                  borderColor="brand.400"
                  boxShadow="0 0 0 2px white, 0 0 0 4px brand.400"
                  mb={4}
                />
                <Heading size="lg" mb={2}>Jane Doe</Heading>
                <Badge colorScheme="pink" fontSize="md" px={3} py={1} borderRadius="full" mb={4}>
                  Level {level}
                </Badge>
                <Box
                  p={4}
                  borderRadius="lg"
                  bg="white"
                  boxShadow="sm"
                  width="100%"
                >
                  <Text fontSize="2xl" fontWeight="bold" color="pink.500" mb={2}>
                    {points} points
                  </Text>
                  <Progress
                    value={(points / ((level + 1) * 1000)) * 100}
                    size="lg"
                    colorScheme="pink"
                    borderRadius="full"
                    bg="gray.100"
                  />
                  <Text fontSize="sm" color="gray.500" mt={2}>
                    {((level + 1) * 1000) - points} points to next level
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* Main Content */}
        <Box>
          <Heading mb={6} color="pink.600">Loyalty Program</Heading>
          <Tabs variant="enclosed" colorScheme="pink">
            <TabList>
              <Tab>Missions</Tab>
              <Tab>Achievements</Tab>
              <Tab>Rewards</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {missions.map((mission) => (
                    <MissionCard
                      key={mission.id}
                      mission={mission}
                      onComplete={completeMission}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {achievements.map((achievement) => (
                    <AchievementCard
                      key={achievement.id}
                      achievement={achievement}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {mockRewards.map((reward) => (
                    <RewardCard key={reward.id} reward={reward} />
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Grid>
    </Container>
  );
}; 
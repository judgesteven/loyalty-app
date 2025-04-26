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
      <Grid templateColumns={{ base: '1fr', md: '300px 1fr' }} gap={8}>
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
              <Avatar
                size="xl"
                name={user?.name}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name}`}
              />
              <Heading size="md">{user?.name}</Heading>
              <Badge colorScheme="pink" fontSize="md">
                Level {level}
              </Badge>
              <Text fontSize="lg" fontWeight="bold" color="pink.500">
                {points} points
              </Text>
              <LevelProgress
                level={level}
                points={points}
                nextLevelPoints={(level + 1) * 1000}
              />
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
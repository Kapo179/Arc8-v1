import { useState } from 'react'
import { YStack, Text, Button, XStack } from 'tamagui'
import { Image, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Home() {
  const router = useRouter()
  const [workoutName] = useState('WELCOME\nWORKOUT')

  return (
    <YStack f={1} backgroundColor="black">
      {/* Background Image/Content */}
      <Image 
        source={require('../../assets/images/workout-bg.jpg')}
        style={StyleSheet.absoluteFill}
      />
      
      {/* Top Navigation */}
      <XStack padding="$4" justifyContent="space-between">
        <Button 
          size="$4" 
          circular
          backgroundColor="$gray8"
          onPress={() => router.back()}
        >
          ←
        </Button>
        <XStack space="$2">
          <Button 
            size="$4" 
            circular
            backgroundColor="$gray8"
          >
            ↻
          </Button>
          <Button 
            size="$4" 
            circular
            backgroundColor="$gray8"
          >
            ⚙️
          </Button>
        </XStack>
      </XStack>

      {/* Main Content */}
      <YStack f={1} padding="$4" justifyContent="flex-end" space="$4">
        <Text 
          color="white" 
          fontSize={40}
          fontWeight="bold"
          lineHeight={40}
        >
          {workoutName}
        </Text>
        <Text color="$gray10" fontSize={20}>
          Dumbbells
        </Text>

        {/* Action Buttons */}
        <XStack justifyContent="space-between" paddingVertical="$4">
          <Button 
            size="$4" 
            backgroundColor="transparent"
            borderColor="$gray8"
            borderWidth={1}
          >
            ♡ save
          </Button>
          <Button 
            size="$4"
            backgroundColor="transparent"
            borderColor="$gray8"
            borderWidth={1}
          >
            📅 schedule
          </Button>
          <Button 
            size="$4"
            backgroundColor="transparent"
            borderColor="$gray8"
            borderWidth={1}
          >
            ✈️ share
          </Button>
          <Button 
            size="$4"
            backgroundColor="transparent"
            borderColor="$gray8"
            borderWidth={1}
          >
            ⬇️ download
          </Button>
        </XStack>

        {/* Start Button */}
        <Button
          size="$6"
          backgroundColor="$yellow10"
          color="black"
          fontWeight="bold"
          onPress={() => router.push('/create-team')}
        >
          START WORKOUT
        </Button>

        {/* Warmup Section */}
        <YStack backgroundColor="$gray8" padding="$2" borderRadius="$4">
          <XStack justifyContent="space-between" alignItems="center">
            <Text color="white" fontSize={16}>WARMUP</Text>
            <Text color="$yellow10" fontSize={16}>2 min</Text>
          </XStack>
          <XStack height={2} backgroundColor="white" marginTop="$2" />
        </YStack>

        {/* Footer */}
        <XStack justifyContent="space-between" alignItems="center" paddingTop="$2">
          <XStack space="$2" alignItems="center">
            <Text color="white" fontSize={16}>H</Text>
            <Text color="white" fontSize={16}>Ladder</Text>
          </XStack>
          <XStack space="$2" alignItems="center">
            <Text color="$gray10" fontSize={16}>curated by</Text>
            <Text color="white" fontSize={16}>Mobbin</Text>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  )
} 
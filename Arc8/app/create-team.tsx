import { useState } from 'react'
import { YStack, Text, Button, Input, Form } from 'tamagui'
import { useRouter } from 'expo-router'

export default function CreateTeam() {
  const [teamName, setTeamName] = useState('')
  const router = useRouter()

  const handleCreateTeam = () => {
    console.log('Creating team:', teamName)
    router.push('/')
  }

  return (
    <YStack f={1} padding="$4" space="$4">
      <Text fontSize="$8" fontWeight="bold">
        Create New Team
      </Text>

      <Form onSubmit={handleCreateTeam}>
        <YStack space="$4">
          <Input
            size="$4"
            placeholder="Team Name"
            value={teamName}
            onChangeText={setTeamName}
          />

          <Button
            theme="active"
            size="$6"
            onPress={handleCreateTeam}
            disabled={!teamName.trim()}
          >
            Create Team
          </Button>

          <Button
            theme="gray"
            size="$6"
            onPress={() => router.back()}
          >
            Cancel
          </Button>
        </YStack>
      </Form>
    </YStack>
  )
}

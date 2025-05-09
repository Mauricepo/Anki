import { Blockquote, Button, Card, Center, Grid, Group, MantineProvider, Space, Title } from '@mantine/core'
import { notifications, Notifications } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { useVocabStore, VocabEntry } from '../store/vocabStore'
import { fetchSentenceFromGPT } from '../utils/gpt'

export const SentenceBuilder = ({
  word,
  onAnswered,
  apiKey
}: {
  word: string[]
  onAnswered: (correct: number) => void
  apiKey: string
}) => {
  const [data, setData] = useState<{ sentence: string; translation: string; words: string[] } | null>(null)
  const [selected, setSelected] = useState<string[]>([])
  const [allDone, setAllDone] = useState<boolean>(false)
  const vocab = useVocabStore((state) => state.vocab)

  useEffect(() => {
    setSelected([])
    if (word.length > 0) {
      fetchSentenceFromGPT(word, apiKey).then((data) => {
        const entries = Object.values(vocab)
        const active = entries.filter((v: VocabEntry) => v.isActive)
        console.log(data.sentence, data.translation, word)
        const sentenceWords = data.sentence.split(' ').filter((w: string) => w.trim() !== '')
        data.words = sentenceWords

        const additionalWords = active
          .map((v) => v.word)
          .filter((w) => !data.words.includes(w))
          .sort(() => Math.random() - 0.5)
          .slice(0, 5)

        data.words.push(...additionalWords)

        data.words = data.words.sort(() => Math.random() - 0.5)
        data.sentence = data.sentence.replace(/[\s。]/g, '')

        setData(data)
      })
    } else setAllDone(true)
  }, [word, apiKey, vocab])

  if (!data && !allDone) return <p>Lade GPT...</p>

  if (allDone) return <p>Alles Erledigt</p>

  const resetSelection = () => {
    setSelected([])
  }

  const SendAnswer = () => {
    const temp = data?.sentence.replace(/[\s。]/g, '')

    if (temp == selected.join('').replace(/[\s。]/g, '')) {
      notifications.show({
        position: 'bottom-right',
        color: 'green',
        title: 'Richtig',
        message: 'Korrekt, gut gemacht 🌟'
      })
      onAnswered(4)
    } else {
      {
        notifications.show({
          position: 'bottom-right',
          color: 'red',
          title: 'Falsch',
          message: 'Leider falsch, versuche es erneut 🛑'
        })
      }
      onAnswered(1)
    }
  }

  return (
    <MantineProvider>
      <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Section component={Grid} inheritPadding>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Title order={2}>Übersetze</Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Blockquote color="blue" mt="0">
              <Group gap="xs">{data?.sentence}</Group>
              <Group gap="xs">{data?.translation}</Group>
            </Blockquote>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Blockquote color="blue" mt="xl">
              <Group>{selected.join(' ')}</Group>
            </Blockquote>
          </Grid.Col>
        </Card.Section>
        <Space></Space>
        <Space h="xl" />
        <Card.Section component={Grid} inheritPadding>
          <Center>
            <Grid.Col span={{ base: 10, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <Group>
                {data?.words
                  .sort(() => Math.random() - 0.5)
                  .map((w: string, i: number) => (
                    <Button key={i} onClick={() => setSelected([...selected, w])}>
                      {w}
                    </Button>
                  ))}
              </Group>
            </Grid.Col>
          </Center>

          <Grid.Col span={{ base: 12, md: 12 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Center>
              <Group>
                <Button onClick={() => SendAnswer()}>Antwort prüfen</Button>
                <Button onClick={() => resetSelection()}>Reset</Button>
              </Group>
            </Center>
          </Grid.Col>

          <Group></Group>
        </Card.Section>
      </Card>
      <Notifications />
    </MantineProvider>
  )
}

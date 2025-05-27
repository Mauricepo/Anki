import { Button, Card, Center, Grid, Group, MantineProvider, Paper, Popover, Space, Stack, Text, Title } from '@mantine/core'
import { notifications, Notifications } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { useVocabStore, VocabEntry } from '../store/vocabStore'
import { fetchSentenceFromGPT } from '../utils/gpt'

export const SentenceBuilder = ({
  word,
  onAnswered,
  apiKey
}: {
  word: VocabEntry | undefined
  onAnswered: (correct: number) => void
  apiKey: string
}) => {
  const [data, setData] = useState<{ sentence: string; translation: string; words: string[]; hiragana: string } | null>(null)
  const [selected, setSelected] = useState<string[]>([])
  const [allDone, setAllDone] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const vocab = useVocabStore((state) => state.vocab)
  const [surrendered, setSurrendered] = useState<boolean>(false)

  useEffect(() => {
    setSelected([])
    if (word) {
      setLoading(true)
      fetchSentenceFromGPT(word.word, apiKey).then((data) => {
        const entries = Object.values(vocab)
        const active = entries.filter((v: VocabEntry) => v.isActive)
        const sentenceWords = data.translation.split(' ').filter((w: string) => w.trim() !== '')
        data.words = sentenceWords

        const additionalWords = active
          .map((v) => v.meaning.split(/[, ]/)[0])
          .filter((w) => !data.words.includes(w))
          .sort(() => Math.random() - 0.5)
          .slice(0, 2)

        data.words.push(...additionalWords)

        data.words = data.words.sort(() => Math.random() - 0.5)
        data.sentence = data.sentence.replace(/[\s。]/g, '')
        setSurrendered(false)
        setData(data)
        setLoading(false)
      })
    } else setAllDone(true)
  }, [word, apiKey, vocab])

  if (!data && !allDone) return <p>Lade GPT...</p>

  if (allDone) return <p>Alles Erledigt</p>

  if (loading) return <p>Generiere Satz</p>

  const resetSelection = () => {
    setSelected([])
  }

  const SendAnswer = () => {
    const temp = data?.translation.toLowerCase().replace(/[\s.,?!]/g, '')

    if (
      temp ==
        selected
          .join('')
          .toLowerCase()
          .replace(/[\s.,?!]/g, '') &&
      surrendered == false
    ) {
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
          message: 'Leider falsch, veilleicht beim nächsten mal. 🛑'
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
            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Button size="md" color="black" variant="transparent">
                  {word?.word.split('/')[0]}
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Stack>
                  <Text size="sm">{word?.word.split('/')[1]}</Text>
                  <Text size="sm">{word?.meaning}</Text>
                </Stack>
              </Popover.Dropdown>
            </Popover>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Paper color={'red'} p="xl" shadow="xl" radius="lg">
              <Group gap="xs">{data?.sentence}</Group>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Paper p="xl" shadow="xl" radius="lg">
              <Group gap="xs">{data?.hiragana}</Group>
            </Paper>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Paper p="xl" shadow="xl" radius="lg">
              <Group gap="xs">{data?.translation}</Group>
            </Paper>
          </Grid.Col>

          {surrendered && (
            <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <Paper p="xl" shadow="xl" radius="lg">
                <Group gap="xs">{data?.translation}</Group>
              </Paper>
            </Grid.Col>
          )}
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Paper p="xl" shadow="xl" radius="lg">
              <Group>{selected.join(' ')}</Group>
            </Paper>
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
                <Button onClick={() => SendAnswer()}>{!surrendered ? 'Antwort prüfen' : 'Nächstes'}</Button>
                <Button onClick={() => setSurrendered(true)}>Aufgeben</Button>
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

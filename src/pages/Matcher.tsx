import { Button, Center, Flex, Group, MantineProvider } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useVocabStore } from '../store/vocabStore'

interface ButtonValues {
  word: string
  spelling: string
  meaning: string
  activated: boolean
  correct: boolean
}

export const Matcher = () => {
  const getMatchWords = useVocabStore((s) => s.getMatchWords)
  const [words, setWord] = useState(getMatchWords())
  const [buttonRow1, setButtonRow1] = useState<ButtonValues[]>([])
  const [buttonRow2, setButtonRow2] = useState<ButtonValues[]>([])

  const [selected, setSelected] = useState<boolean>()

  const [meaningMode, setMeaningMode] = useState<boolean>(false)

  const clickonButton = (button: ButtonValues) => {
    if (!selected) {
      setSelected(true)
      button.activated = true
      setButtonRow1([...buttonRow1])
      setButtonRow2([...buttonRow2])
      return
    }

    button.activated = true
    setButtonRow1([...buttonRow1])
    setButtonRow2([...buttonRow2])

    const targetButton = buttonRow1.find((b) => b.activated)
    const target2Button = buttonRow2.find((b) => b.activated)

    if (targetButton?.word == target2Button?.word && targetButton?.activated && target2Button?.activated) {
      targetButton.activated = false
      target2Button.activated = false
      targetButton.correct = true
      target2Button.correct = true
      setSelected(false)
      setButtonRow1([...buttonRow1])
      setButtonRow2([...buttonRow2])
      return
    } else {
      setSelected(false)
    }

    if (targetButton) {
      targetButton.activated = false
    }

    if (target2Button) {
      target2Button.activated = false
    }

    setButtonRow1([...buttonRow1])
    setButtonRow2([...buttonRow2])
  }

  useEffect(() => {
    if (words) {
      setMeaningMode(false)
      const row1 = words.map((word) => ({
        word: word.word.split('/')[0],
        spelling: word.word.split('/')[1],
        meaning: word.meaning,
        activated: false,
        correct: false
      }))
      const row2 = row1.map((word) => ({
        ...word
      }))

      setButtonRow1(row1)
      setButtonRow2(row2.sort(() => Math.random() - 0.5))
    }
  }, [words])

  useEffect(() => {
    if (buttonRow1.length === 0 || buttonRow2.length === 0) return

    if (!meaningMode && buttonRow1.every((button) => button.correct) && buttonRow2.every((button) => button.correct)) {
      setMeaningMode(true)

      setButtonRow1((prevRow1) => prevRow1.map((button) => ({ ...button, correct: false })))
      setButtonRow2((prevRow2) => prevRow2.map((button) => ({ ...button, correct: false })))
    }
    if (meaningMode && buttonRow1.every((button) => button.correct) && buttonRow2.every((button) => button.correct)) {
      setWord(getMatchWords())
    }
  }, [buttonRow2, buttonRow1, getMatchWords, meaningMode])

  return (
    <MantineProvider>
      <Center style={{ height: '100vh' }}>
        <Group justify="center" gap="100">
          <Flex mih={50} direction="column" gap="xl" wrap="wrap">
            {buttonRow1.map((word, index) => (
              <Button
                key={index}
                onClick={() => clickonButton(word)}
                disabled={word.correct || !!buttonRow1.find((b) => b.activated)}
                style={{ backgroundColor: word.activated ? 'red' : word.correct ? 'green' : 'blue' }}
              >
                {word.word}
              </Button>
            ))}
          </Flex>
          <Flex mih={50} direction="column" gap="xl" wrap="wrap">
            {buttonRow2.map((word, index) => (
              <Button
                onClick={() => clickonButton(word)}
                key={index}
                disabled={word.correct || !!buttonRow2.find((b) => b.activated)}
                style={{ backgroundColor: word.activated ? 'red' : word.correct ? 'green' : 'blue' }}
              >
                {meaningMode ? word.meaning : word.spelling}
              </Button>
            ))}
          </Flex>
        </Group>
      </Center>
    </MantineProvider>
  )
}

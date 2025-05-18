import React, { useState } from 'react'
import { SentenceBuilder } from '../components/SentenceBuilder'
import { useVocabStore } from '../store/vocabStore'

export const TrainerPage: React.FC = () => {
  const getNext = useVocabStore((s) => s.getNext)
  const update = useVocabStore((s) => s.update)
  const [word, setWord] = useState(getNext())
  const apiKey = useVocabStore((s) => s.getApiKey)

  return (
    <SentenceBuilder
      word={word ?? ''}
      apiKey={apiKey()}
      onAnswered={(correct) => {
        if (word) {
          update(word, correct as 1 | 3 | 4 | 5)
        }
        setWord(getNext())
      }}
    />
  )
}

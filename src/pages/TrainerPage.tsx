import React, { useState } from 'react'
import { SentenceBuilder } from '../components/SentenceBuilder'
import { useVocabStore } from '../store/vocabStore'

export const TrainerPage: React.FC = () => {
  const getNext = useVocabStore((s) => s.getNext)
  const update = useVocabStore((s) => s.update)
  const [word, setWord] = useState(getNext())
  const apiKey = import.meta.env.VITE_OPENAI_KEY

  return (
    <SentenceBuilder
      word={word}
      apiKey={apiKey}
      onAnswered={(correct) => {
        update(word, correct)
        setWord(getNext())
      }}
    />
  )
}

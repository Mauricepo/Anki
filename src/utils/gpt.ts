// utils/gpt.ts
export const fetchSentenceFromGPT = async (word: string, apiKey: string) => {
  const prompt = `Create a very short (5-10 words), natural Japanese sentence using the word: "${word}". 

Requirements:
- The sentence must be appropriate for the JLPT N5 level.
- Use only JLPT N5 grammar and vocabulary.
- The sentence must be natural and something a native speaker would say.
- The word "${word}" must be used **in its proper Japanese form**, not as romaji or English.
- The sentence must be written using correct **kanji and kana**, as a native speaker would write it.
- Do not include any English or romaji in the sentence.
- Do not put the japanese sentence in the translation output, only the translation of the sentence.

Output format (in JSON):
{
  "sentence": "...", 
  "translation": "...", 
  "hiragana": "..."
}`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4.1-nano',
      messages: [{ role: 'user', content: prompt }]
    })
  })

  const json = await res.json()
  const content = json.choices[0].message.content
  return JSON.parse(content)
}

export const fetchExplainationFromGPT = async (sentence: string, apiKey: string) => {
  const prompt = `Erkläre folgenden Japnischen Satz, dessen Wörter und Grammatik: "${sentence}"
  Output format (in JSON):
{
  "explanation": "...", 
}`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4.1-nano',
      messages: [{ role: 'user', content: prompt }]
    })
  })

  const json = await res.json()
  const content = json.choices[0].message.content
  return JSON.parse(content)
}

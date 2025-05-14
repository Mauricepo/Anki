// utils/gpt.ts
export const fetchSentenceFromGPT = async (word: string[], apiKey: string) => {
  const prompt = `Japanese Sentence (JLPT N5/N4) with: "${word[0]}", "${word[1]}", "${word[2]}". natural, correct, rational.. JSON:
{
"sentence": "...",
"translation": "...",
"hiragana": "...",
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

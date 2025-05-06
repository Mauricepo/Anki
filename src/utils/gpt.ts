// utils/gpt.ts
export const fetchSentenceFromGPT = async (word: string[], apiKey: string) => {
  const prompt = `Gib mir einen einfachen japanischen natürlich klingenden Satz der aus folgenden Worten besteht: "${word[0]}" "${word[1]}" "${word[2]}" in jlp n5 oder jlp n4, ohne 。, seine deutsche Übersetzung, und alle! Wörter als Bausteine (getrennt). Antworte JSON:
{
  "sentence": "...",
  "translation": "...",
  "words": ["...", "...", "..."]
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

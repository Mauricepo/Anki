// utils/gpt.ts
export const fetchSentenceFromGPT = async (word: string[], apiKey: string) => {
  const prompt = `Erstelle einen einfachen, natürlichen japanischen Satz (JLPT N5 oder N4) mit den allen! Wörtern und ohne 。 : "${word[0]}", "${word[1]}", "${word[2]}". Gib folgende JSON zurück:
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

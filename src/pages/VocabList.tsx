import { Button, MantineProvider } from '@mantine/core'
import { useVocabStore, VocabEntry } from '../store/vocabStore'

export const VocabList = () => {
  const vocab = useVocabStore((state) => state.vocab)
  const reset = useVocabStore((state) => state.reset)
  const activateNow = useVocabStore((state) => state.activateNow)
  const markKnown = useVocabStore((state) => state.markKnown)
  const resetWord = useVocabStore((state) => state.resetWord)

  const now = Date.now()
  const entries = Object.values(vocab)
  const active = entries.filter((v: VocabEntry) => v.isActive)
  const inactive = entries.filter((v: VocabEntry) => !v.isActive)

  return (
    <MantineProvider>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Vokabel-Fortschritt</h1>
        <Button>Teeest</Button>
        <button onClick={() => reset} className="mb-4 bg-red-500 text-white px-3 py-1 rounded">
          Zurücksetzen
        </button>

        {/* Aktive Vokabeln */}
        <h2 className="text-lg font-semibold mb-2">Aktive Vokabeln</h2>
        {active.length === 0 ? (
          <p className="text-sm text-gray-500 mb-4">Noch keine aktiven Vokabeln für heute.</p>
        ) : (
          <ul className="space-y-3 mb-6">
            {active
              .sort((a: VocabEntry, b: VocabEntry) => a.dueDate - b.dueDate)
              .map((v: VocabEntry) => {
                const dueIn = Math.max(0, Math.ceil((v.dueDate - now) / (1000 * 60 * 60 * 24)))
                const isDue = v.dueDate <= now
                const isNew = v.lastReviewed === v.dueDate

                return (
                  <li key={v.word} className="border p-3 rounded-md bg-white shadow-sm">
                    <div className="font-semibold flex items-center justify-between">
                      {v.word}
                      {isNew && <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded">NEU</span>}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      Fällig in: {isDue ? '📌 Jetzt' : `in ${dueIn} Tag(en)`}
                      <br />
                      Intervall: {v.interval} Tag(e)
                      <br />
                      Leichtigkeit (EF): {v.easeFactor.toFixed(2)}
                      <br />
                      Wiederholungen: {v.repetitions}
                    </div>
                    <button onClick={() => resetWord(v.word)} className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">
                      Wort zurücksetzen
                    </button>
                  </li>
                )
              })}
          </ul>
        )}

        {/* Inaktive Vokabeln */}
        <h2 className="text-lg font-semibold mb-2">Noch nicht gestartet</h2>
        {inactive.length === 0 ? (
          <p className="text-sm text-gray-500">Alle Vokabeln wurden bereits aktiviert.</p>
        ) : (
          <ul className="space-y-2">
            {inactive.map((v: VocabEntry) => (
              <li key={v.word} className="p-3 rounded-md border text-gray-700 bg-gray-50 flex justify-between items-center">
                <span>{v.word}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => activateNow(v.word)}
                    className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200"
                  >
                    Früher anfangen
                  </button>
                  <button
                    onClick={() => markKnown(v.word)}
                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200"
                  >
                    Kenne ich schon
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </MantineProvider>
  )
}

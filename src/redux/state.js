import { write, read} from '../utils/ls'

export const initialState = read('initialState', {
  topics: ["Nouns", "Verbs", "Adjectives", "Sentences", "IT"],
  statuses: ["yes", "win"],
  dictionary: [],
})
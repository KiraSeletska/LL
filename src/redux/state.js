import { read } from '../utils/ls'

export const initialState = read('initialState', {
  topics: ["Nouns", "Verbs", "Adjectives"],
 // statuses: ["yes", "win"],
 state: ["Done", "Progress"],
  dictionary: [],
})
import { CharacterSheet } from '@prisma/client'

interface ActionTypesCharacterSheets extends ActionsResponse {
  response?: CharacterSheet[]
}

interface ActionTypesCharacterSheet extends ActionsResponse {
  response?: CharacterSheet
}

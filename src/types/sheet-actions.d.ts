import { CharacterSheet } from '@prisma/client'

interface GetAllSheetsAction extends ActionsResponse {
  response?: CharacterSheet[]
}

export enum CardTypes {
  SOLDIER = 'soldier',
  CANNON = 'cannon',
  HORSEMAN = 'horseman'
}

export type Card = {
  territoryId: string
  territoryName: string
  cardType: CardTypes
}
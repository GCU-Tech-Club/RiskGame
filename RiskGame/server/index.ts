/**
 * This is the primary entrypoint of the server 
 * It shouldn't contain any of the following logic - this is just for show
 */

// ex - using the shared types folder
import { User } from '@shared/types'
import { storeProvider } from '@server/stores/storeProvider'

const user: User = {
    id: '123'
}

console.log('Sample user', user)


const gameStore = storeProvider.getStore('gameStore')

const currentState = gameStore.getState()

console.log('The current state of the game:', currentState)

gameStore.on('stateChange', (state) => {
    console.log('The new state of the game:', state)
})

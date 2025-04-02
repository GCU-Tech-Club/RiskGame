/**
 * This is the primary entrypoint of the server 
 * It shouldn't contain any of the following logic - this is just for show
 */

// ex - using the shared types folder
import { User } from '@shared/types'
import { storeProvider } from '@server/stores/storeProvider'
import { EventBus } from './stores/EventBus'

const eventBus = new EventBus();

eventBus.on('mapstore:playerJoined', () => {

})

const user: User = {
    id: 123,
}

console.log('Sample user', user)


const gameStore = storeProvider.getStore('gameStore')

const currentState = gameStore.getState()

console.log('The current state of the game:', currentState)

gameStore.on('stateChange', (state) => {
    console.log('The new state of the game:', state)
})


eventBus.on('lobbyStore:startGame', (players) => {
    console.log('The game is starting with players:', players);
    /**
     * We have received the event from the lobby store
     * We can now start the game. 
     * We have a list of users, who are in the lobby, which means
     * we need to initialize the game with the users.
     */

    const gameStore = storeProvider.getStore('gameStore');
    const users = [];
    players.forEach((player) => {
        const user: User = {
            id: player.id,
        }
        users.push(user);
    });
    gameStore.getState().users = players;
    /**
     * We have the users, now we can start the game.
     * We need to emit an event to the game store, so that it can start the game.
     * We can use the event bus to emit the event.
     */

});
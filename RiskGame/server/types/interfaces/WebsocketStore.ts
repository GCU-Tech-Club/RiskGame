import { User } from "@shared/types"
import EventEmitter from "node:events"

export type Connection = {
    id: string
    user: User
}

export type websocketStoreEvents = {
    newConnection: [Connection]
}

export interface WebsocketStoreClass extends EventEmitter<websocketStoreEvents> {
    getConnections(): Connection[]
}
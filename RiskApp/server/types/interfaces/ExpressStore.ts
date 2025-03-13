import EventEmitter from "node:events"

export type ExpressState = {
    ipAddress: string
    port: number
}

export type expressStoreEvents = {
    stateChange: [ExpressState]
}

export interface ExpressStoreClass extends EventEmitter<expressStoreEvents> {
    getState(): ExpressState
}
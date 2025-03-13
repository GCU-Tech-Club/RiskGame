import { GameStore } from "./gameStore";

// Types instances of stores
type StoreType = {
    gameStore: GameStore;
};

class StoreProvider {
    private static instance: StoreProvider;

    // All of the available stores
    private stores: Partial<StoreType> = {};

    // Sets up the stores inside the provider
    private constructor() {
        this.stores.gameStore = new GameStore();
    }

    // Singleton instance
    public static getInstance(): StoreProvider {
        if (!StoreProvider.instance) {
            StoreProvider.instance = new StoreProvider();
        }
        return StoreProvider.instance;
    }

    // Gets any store inside
    public getStore<K extends keyof StoreType>(storeName: K): StoreType[K] {
        return this.stores[storeName] as StoreType[K];
    }
}

export const storeProvider = StoreProvider.getInstance();

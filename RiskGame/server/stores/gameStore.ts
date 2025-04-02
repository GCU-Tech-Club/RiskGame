// templates game store logic

import { GameState } from "@server/types/interfaces/GameStore";
import { EventBus } from "./EventBus";
import EventBusListener from "@server/types/interfaces/EventListener";

export class GameStore implements EventBusListener {
  eventBus: EventBus = new EventBus();
  private state: GameState = {
    users: [],
  };

  getState(): GameState {
    return this.state;
  }
}

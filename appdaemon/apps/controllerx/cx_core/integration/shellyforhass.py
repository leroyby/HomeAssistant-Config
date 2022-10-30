from typing import Any, Dict, Optional

from appdaemon.plugins.hass.hassapi import Hass
from cx_const import DefaultActionsMapping
from cx_core.integration import EventData, Integration


class ShellyForHASSIntegration(Integration):
    name = "shellyforhass"

    def get_default_actions_mapping(self) -> Optional[DefaultActionsMapping]:
        return self.controller.get_shellyforhass_actions_mapping()

    async def listen_changes(self, controller_id: str) -> None:
        await Hass.listen_event(
            self.controller,
            self.event_callback,
            "shellyforhass.click",
            entity_id=controller_id,
        )

    async def event_callback(
        self, event_name: str, data: EventData, kwargs: Dict[str, Any]
    ) -> None:
        click_type = data["click_type"]
        action = f"{click_type}"
        await self.controller.handle_action(action, extra=data)

[![GitHub last commit](https://img.shields.io/github/last-commit/leroyby/homeassistant-config?style=flat)](https://github.com/leroyby/HomeAssistant-Config/commits/main)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Assistant-2022.10.4%20-darkblue)](https://github.com/home-assistant/home-assistant/releases/latest)

# <a name="table">Table of Contents </a>
   * [Home Assistant configuration](#home-assistant-configuration-overview)
      * [Hardware](#hardware)
   * [Useful links](#useful-links)
   * [My naming convention](https://github.com/leroyby/Homeassistant/blob/main/naming_convention.md)
   * [Statistics](#Statistics)
   
## Home Assistant configuration overview
This is my personal Documentation for my Home Assistant setup. The setup is running on a raspberry pi with a ConBee II stick (Zigbee). More details under[Hardware](#hardware). Each directory has a short readme explaining what's in there, and the purpose of each file or group of files.

Feel free to get inspired or copy some code from me!

Please consider the following points:
- Some product links reffer to the swiss manufacturer website. BTW I try to include atleast the english version of it.
- The Amazon links are for germany.
- My native language is german, maybe there are some grammar errors in my english ;)

At this point also a big thanks to the whole home assistant community and especally to [CCOSTAN](https://github.com/CCOSTAN/), [Frenck](https://github.com/frenck/), [geekofweek](https://github.com/geekofweek/) and [basnijholt](https://github.com/basnijholt) for some of the ideas (including how to document on github). Make sure to check them out!

## <a name="menu">Menu Hardware</a>
| [Components](#components)| [Hubs](#hubs) | [Lighting](#Lights) | [Outlets & Switches](#outlets)| [Locks](#locks) | [Media](#media) | [Sensors](#sensors) | [Vacuum](#vacuum) | [Statistics](#statistics) | [Various](#various) | [Integrations](#integrations) | [Go to Table of Contents](#table) |

## Hardware
[Go to Table of Contents](#table)
### <a name="Components">Components</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [Raspberry Pi 3 Model B](https://www.raspberrypi.com/products/raspberry-pi-3-model-b/) | [Amazon](https://amzn.to/3BL2gD1) | 1 | Ethernet | - | Runs Home Assistant, is the heart of the whole home | integrated |
| [Phosscon ConBee II](https://phoscon.de/de/conbee2) | [Amazon](https://amzn.to/3rseX15) | 1 | USB | - | Zigbee Adapter for Home Assistant | integrated |

### <a name="hubs">Hubs</a>
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [TRÅDFRI Gateway V1](https://www.ikea.com/ch/de/p/tradfri-gateway-weiss-40337806)| - | 1 | Ethernet|[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | V1, because V2 is comming soon (late 2022) / userd for integration of TRÅDFRI lights and remotes|integrated|
| [Hue Bridge v2](https://www.philips-hue.com/de-de/p/hue-hue-bridge/8719514342620)| [Amazon](https://amzn.to/3xPfduH) | 1 | Ethernet |[Philips Hue](https://www.home-assistant.io/integrations/hue/)|-|integrated|
| [Aqara Hub M2](https://www.aqara.com/us/smart_hub_m2.html) | [Amazon](https://amzn.to/3SeSlgc) | 1 | Ethernet | [HomeKit-Controller](https://www.home-assistant.io/integrations/homekit_controller/)|-|retired|

### <a name="Lights">Lightning</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [TRÅDFRI Bulb E27 White Spectrum](https://www.ikea.com/ch/en/p/tradfri-led-bulb-e27-1055-lumen-wireless-dimmable-white-spectrum-globe-opal-white-40486783/) | - | 4 | Ikea Hub (Zigbee) |[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | - | integrated|
| [TRÅDFRI Bulb E27 RGBW](https://www.ikea.com/ch/en/p/tradfri-led-bulb-e27-806-lumen-smart-wireless-dimmable-colour-and-white-spectrum-globe-70439158/) | - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)| - | integrated|
| [TRÅDFRI Bulb E14 White Spectrum](https://www.ikea.com/ch/en/p/tradfri-led-bulb-e14-470-lumen-wireless-dimmable-white-spectrum-globe-opal-white-50486787/) | - | 1 | Ikea Hub (Zigbee) |[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | - |integrated|
| [TRÅDFRI LED Panel Floatl Warm White](tba) | - | 1 | Ikea Hub (Zigbee) |[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | is installed in the small bathroom, can't be used because of fan (always running) with power |not integrated|
| [Philips Hue Gradient Signe Floor lamp RGBW](https://www.philips-hue.com/en-us/p/hue-white-and-color-ambiance-gradient-signe-floor-lamp/046677803506) | [Amazon](https://amzn.to/3xPaKrN) | 1 | Hue Hub (Zigbee)|[Philips Hue](https://www.home-assistant.io/integrations/hue) | -  |integrated|
| [Gledopto Spot MR16 RGBW](https://www.gledopto.eu/smart-zigbee-led-mr16-led-rgbcct) | [Amazon](https://amzn.to/3LH9yN1) | 1 | tba | tba | - | planned |
| [WiZ Spot 4.9W PAR16 RGBW](https://www.wizconnected.com/de-ch/p/led-lampe-spot-4-9-w--entspr-50-w--par16-gu10-x2/8719514551312)| [Single-Pack](https://amzn.to/3dM5mPf) [Double-Pack](https://amzn.to/3DRK3qq) | 1 | Wi-Fi | [WIZ](https://www.home-assistant.io/integrations/wiz/) | - | integrated |

| Lights are grouped in [light_groups.yaml](https://github.com/leroyby/Homeassistant/blob/main/light_groups.yaml) |
### <a name="Outlets">Outlets & Switches</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [myStrom WiFi Switch](https://mystrom.ch/de/wifi-switch/) | - | 4 | WLAN |[myStrom](https://www.home-assistant.io/integrations/mystrom) | REST API used for other features |integrated|
| [TRÅDFRI Switch](https://www.ikea.com/ch/en/p/tradfri-wireless-control-outlet-smart-00473650/) | | 1 | Ikea Hub (Zigbee)|[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | - |integrated|

### <a name="Locks">Locks</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [Nuki Smartlock with Bridge G2](https://nuki.io/en/) | [Lock G3](https://amzn.to/3r2nK9N) [Bundle G3](https://amzn.to/3RbEbv9) | 1 | Nuki Bridge (Bluetooth) |[Nuki](https://www.home-assistant.io/integrations/nuki) | tested with [Nuki Card v11](https://community.home-assistant.io/t/nuki-card-with-callback-support-supports-both-lock-opener-it-replaces-the-official-integration/311932) but currently using the build in option |integrated|

### <a name="Sensors">Sensors</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [Aqara Motion Sensor](https://www.aqara.com/eu/motion_sensor.html) | [Amazon](https://amzn.to/3UzKNGu) | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)| - |integrated|
| [Aqara Temperature and Humidity Sensor](https://www.aqara.com/eu/temperature_humidity_sensor.html) | [Amazon](https://amzn.to/3dCzpsT) | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)| - | integrated |
| [Aqara Vibration Sensor](https://www.aqara.com/eu/vibration_sensor.html) | [Amazon](https://amzn.to/3dGX0sm) | 1  | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/) | - |integrated but unused |

### <a name="Multimedia">Multimedia</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [Sonos One](https://www.sonos.com/en/shop/one) | [Sonos](https://amzn.to/3DO0tQj) | 1 | Wi-Fi | [Sonos](https://www.home-assistant.io/integrations/sonos/)|-|integrated|
| [Google Home Mini](https://store.google.com/ch/product/google_nest_mini?pli=1&hl=de) | - | 1 | Wi-Fi | [Google Cast](https://www.home-assistant.io/integrations/cast/)|-|integrated|
| [Xbox Series X](https://www.xbox.com/en-US/consoles/xbox-series-x?xr=shellnav) |[Xbox](https://amzn.to/3fhObWk) | 1 | Wi-Fi | [Xbox](https://www.home-assistant.io/integrations/xbox/) & [Xbox Live](https://www.home-assistant.io/integrations/xbox_live/)|-|integrated|
| Samsung Smart TV 55"| - | 1 | Wi-Fi| - | - | not integrated |
| LG OLED TV 65"| [LG OLED TVs](https://amzn.to/3r0Y2m5) | 1 | Ethernet| [HomeKit-Controller](https://www.home-assistant.io/integrations/homekit_controller/) | - | Integrated |
| Apple TV 2| - | 1 | - | - | - | unused |

### <a name="Remotes">Remotes</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [TRÅDFRI Wireless dimmer](https://www.ikea.com/ch/en/p/tradfri-wireless-dimmer-white-70408595/)| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
|[TRÅDFRI STYRBAR Remote control](https://www.ikea.com/ch/en/p/styrbar-remote-control-white-30488363/)| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
| TRÅDFRI Wireless 5-Button Remote| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
|[TRÅDFRI Shortcut button](https://www.ikea.com/ch/en/p/tradfri-shortcut-button-white-smart-40356381/)| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
|[Aquara Wi-Fi Mini Switch](https://www.aqara.com/eu/Wi-Fi_mini_switch.html)| [Amazon](https://amzn.to/3SbrK3L) | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |

### <a name="Vacuum">Vacuum</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| iRobot Roomba 976 | [Roomba](https://amzn.to/3xKQVBZ) | 1 | Wi-Fi |[iRobot](https://www.home-assistant.io/integrations/roomba/) | - |integrated|



### <a name="various">Various</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| HP OfficeJet Pro 7740 Printer | [Amazon](https://amzn.to/3LDks6p) | 1 | Wi-Fi | [IPP](https://www.home-assistant.io/integrations/ipp/) | - | integrated |
| Ender 3 3D-Printer | [Ender 3](https://amzn.to/3xP8Wz3) | 1 | Wi-Fi (via OctoPrint) | [OctoPrint](https://www.home-assistant.io/integrations/octoprint/) | used for printing gadgets, mainly holder etc | integrated|
| Visual Studio Code | - | 1 | - | - | used for editing .yaml or .md Files | - |

### <a name="integrations">Integrations</a>
| Integration  | Description |
| ------------- |  ------------- |
| [HACS](https://hacs.xyz/) |  Used for Varius themes and integrations (not default) |
| [Zigbee2MQTT](https://www.zigbee2mqtt.io/) | - |

### Installed Integrations HACS
| Integration  | Description |
| ------------- |  ------------- |
[Average Sensor](https://github.com/Limych/ha-average) | - |
[Powercalc](https://github.com/bramstroker/homeassistant-powercalc) | - |

### Installed Integrations Frontends (Themes + Cards)
| Integration  | Description |
| ------------- |  ------------- |
| [Mushroom](https://github.com/piitaya/lovelace-mushroom)| - |
| [Google Theme](https://github.com/JuanMTech/google-theme)| - |

# <a name="Useful-links">Useful Links</a>
| Type  | Link |
| ------------- |  ------------- |
| Website | [HA-Documentation](https://www.home-assistant.io/docs/)|
| Website | [HA-Integrations](https://www.home-assistant.io/integrations/)
| Github-Repository | [Frenck's Config](https://github.com/frenck/home-assistant-config) |

## <a name="statistics">Statistics (as in October 2022)</a>
| Component  | Count | Component  | Count |
| ------------- | :---: | ------------- | :---: |
| Automations | 27 | Scripts | 14 |
| Zones | 1 | Device Trackers | 10 |
| Switches | 25 | Sensors | 136 | 
| Binary Sensors | 31 |Input Booleans | 8 |
| Input Numbers | 0 | Input Text | 2 |
| Input Selects | 4 | Input Datetime | 1 |
---
| [Go to Table of Contents](#table) | [Affiliate Disclosure](https://github.com/leroyby/Homeassistant/blob/main/affiliate_disclosure.md) |
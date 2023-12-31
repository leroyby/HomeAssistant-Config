[![GitHub last commit](https://img.shields.io/github/last-commit/leroyby/homeassistant-config?style=plasticr)](https://github.com/leroyby/HomeAssistant-Config/commits/main)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Assistant-2023.11.3%20-darkblue)](https://github.com/home-assistant/home-assistant/releases/latest)

# <a name="table">Table of Contents - Index </a>
   * [Home Assistant configuration](#home-assistant-configuration-overview)
      * [Statistics](#statistics)
      * [History](#History)
   * [How is the SmartHome controlled](#control)
      * [Physical](#physical-control)
      * [Voice](#voice-control)
      * [Screen](#screen-control)
   * [Hardware](#menu-hardware)
   * [Useful links](#useful-links)
   * [My naming convention](https://github.com/leroyby/Homeassistant/blob/main/naming_convention.md)
   
## Home Assistant configuration overview
This is my personal Documentation for my Home Assistant setup. The setup is running on a raspberry pi with a ConBee II stick (Zigbee). More details under [Hardware](#hardware). Each directory has a short readme explaining what's in there, and the purpose of each file or group of files. I try to keep [Home Assistant](https://github.com/home-assistant/core) on the [latest release](https://github.com/home-assistant/core/releases). 

If you start with HA, start with the GUI and get everything done there and if you reach the limits with GUI switch to the YAML-Files. Me on my side I try to do most things without the GUI.

Feel free to get inspired or copy some code from me!

Please consider the following points:
- Some product links reffer to the swiss manufacturer website. BTW I try to include atleast the english version of it.
- The Amazon links are for germany.
- My native language is german, maybe there are some grammar errors in my english ;)

At this point also a big thanks to the whole home assistant community and especally to [CCOSTAN](https://github.com/CCOSTAN/), [Frenck](https://github.com/frenck/), [geekofweek](https://github.com/geekofweek/) and [basnijholt](https://github.com/basnijholt) for some of the ideas (including how to document on github). Make sure to check them out!

### <a name="statistics">Statistics (last update/commit: [![GitHub last commit](https://img.shields.io/github/last-commit/leroyby/homeassistant-config?style=plasticr)](https://github.com/leroyby/HomeAssistant-Config/commits/main))</a>
# Repository statistics
| Lines of code| Sensors| Binary Sensors | Switches  | Automations | Scripts | Scenes |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| 0 | 399 | 57 | 20 | 83 | 24 | 3 |

###  <a name="History">History</a>
Started in 2014 with the [Tradfri Gateway](https://www.ikea.com/ch/en/search/products/?q=tradfri) (with 3 White spectrum bulbs) and with the [myStrom Switches](https://mystrom.ch/). Added a LED-Strip from China to the setup and started tinkering with HA. But not for very long. During this time I tested also Apple HomeKit, but I was never really statisfied. 2022 I got some time and started again with HA and now here we are... 

## <a name="control">SmartHome control</a>
Many things are automated, you'll find them in the [Automations-Section](https://github.com/leroyby/HomeAssistant-Config/tree/main/automations). Physical control is provided with remotes and buttons (with [automations](https://github.com/leroyby/HomeAssistant-Config/tree/main/automations) and [scripts](https://github.com/leroyby/HomeAssistant-Config/tree/main/script)). And the last variant is via [Webinterface](https://github.com/leroyby/HomeAssistant-Config/blob/main/ui-lovelace.yaml).

### <a name="physical">Physical control</a>
See list of [Remotes](#remotes) and [the configuration](https://github.com/leroyby/HomeAssistant-Config/tree/main/automations/Remotes).

### <a name="voice">Voice control</a>
Thinking about adding Google Voice Assistant to my HA-Setup.

### <a name="screen">Screen control</a>
Controlling most things with the [Web-UI](https://github.com/leroyby/HomeAssistant-Config/blob/main/ui-lovelace.yaml) from my Computer or with the [App](https://www.home-assistant.io/integrations/mobile_app/) on my iPhone.
And I will be adding a wall tablet soon (WIP).


## <a name="menu">Menu Hardware</a>
| [Components](#components)| [Hubs](#hubs) | [Lighting](#Lights) | [Outlets & Switches](#outlets)| [Locks](#locks) | [Media](#media) | [Remotes](#remotes) | [Sensors](#sensors) | [Climate](#Climate) | [Vacuum](#vacuum) | [Statistics](#statistics) | [Various](#various) | [Go to Table of Contents](#table) |

## Hardware
[Go to Table of Contents](#table)
### <a name="Components">Components</a>
| [Go to Menu](#menu) |
| Device | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | ------------- | ------------- | ------------- | ------------- |
| Proxmox VM | 1 | Ethernet | - | Runs Home Assistant, is the heart of the whole home | integrated |
| [Phoscon ConBee II](https://phoscon.de/de/conbee2) | 1 | USB | - | Zigbee Adapter for Home Assistant | integrated |

### <a name="hubs">Hubs</a>
| [Go to Menu](#menu) |
| Device  | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | ------------- | ------------- | ------------- | ------------- |
| [TRÅDFRI Gateway V1](https://www.ikea.com/ch/de/p/tradfri-gateway-weiss-40337806)| 1 | Ethernet|[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | V1, because V2 is comming soon (late 2022) / userd for integration of TRÅDFRI lights. Maybe will be renewd with the new [Dirigera Hub](https://about.ikea.com/en/newsroom/2022/05/25/ikea-launches-dirigera-the-matter-ready-hub-for-smart-products-and-a-new-ikea-home-smart-app) |not used|


### <a name="Lights">Lightning</a>
| [Go to Menu](#menu) |
| Device  | Quantity | Connection | Home Assistant | Notes | Status |
| -------------  | :---: | ------------- | ------------- | ------------- | ------------- |
| [TRÅDFRI Bulb E27 White Spectrum](https://www.ikea.com/ch/en/p/tradfri-led-bulb-e27-1055-lumen-wireless-dimmable-white-spectrum-globe-opal-white-40486783/) | 4 | Ikea Hub (Zigbee) |[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | - | integrated|
| [TRÅDFRI Bulb E27 RGBW](https://www.ikea.com/ch/en/p/tradfri-led-bulb-e27-806-lumen-smart-wireless-dimmable-colour-and-white-spectrum-globe-70439158/) | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)| - | integrated|
| [TRÅDFRI Bulb E14 White Spectrum](https://www.ikea.com/ch/en/p/tradfri-led-bulb-e14-470-lumen-wireless-dimmable-white-spectrum-globe-opal-white-50486787/) | 1 | Ikea Hub (Zigbee) |[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | - |integrated|
| [TRÅDFRI LED Panel Floatl Warm White](tba) | 1 | Ikea Hub (Zigbee) |[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | - |not integrated|
| [Philips Hue Gradient Signe Floor lamp RGBW](https://www.philips-hue.com/en-us/p/hue-white-and-color-ambiance-gradient-signe-floor-lamp/046677803506)  | 1 | Hue Hub (Zigbee)|[Philips Hue](https://www.home-assistant.io/integrations/hue) | -  |integrated|
| [Gledopto Spot MR16 RGBW](https://www.gledopto.eu/smart-zigbee-led-mr16-led-rgbcct) | 4 | ConBee II (ZigBee) | [MQTT](https://www.home-assistant.io/integrations/mqtt/) | - | integrated |
| [WiZ Spot 4.9W PAR16 RGBW](https://www.wizconnected.com/de-ch/p/led-lampe-spot-4-9-w--entspr-50-w--par16-gu10-x2/8719514551312) | 1 | Wi-Fi | [WIZ](https://www.home-assistant.io/integrations/wiz/) | - | integrated |

| Lights are grouped in [light_groups.yaml](https://github.com/leroyby/HomeAssistant-Config/blob/main/groups/light_groups.yaml) |
### <a name="Outlets">Outlets & Switches</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| [myStrom WiFi Switch](https://mystrom.ch/de/wifi-switch/) | - | 4 | WLAN |[myStrom](https://www.home-assistant.io/integrations/mystrom) | REST API used for other features |integrated|
| [TRÅDFRI Switch](https://www.ikea.com/ch/en/p/tradfri-wireless-control-outlet-smart-00473650/) | | 1 | Ikea Hub (Zigbee)|[IKEA TRÅDFRI](https://www.home-assistant.io/integrations/tradfri) | - |integrated|

### <a name="Locks">Locks</a>
| [Go to Menu](#menu) |
| Device | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | ------------- | ------------- | ------------- | ------------- |
| [Nuki Smartlock with Bridge G2](https://nuki.io/en/) | 1 | Nuki Bridge (Bluetooth) |[Nuki](https://www.home-assistant.io/integrations/nuki) | tested with [Nuki Card v11](https://community.home-assistant.io/t/nuki-card-with-callback-support-supports-both-lock-opener-it-replaces-the-official-integration/311932) but currently using the build in option |integrated|

### <a name="Sensors">Sensors</a>
| [Go to Menu](#menu) |
| Device  | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | ------------- | ------------- | ------------- | ------------- |
| [Aqara Motion Sensor](https://www.aqara.com/eu/motion_sensor.html)  | 3 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)| - |integrated|
| [Sonoff Motion Sensor](https://sonoff.tech/product/smart-home-security/snzb-03/) |  1  | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/) | - |integrated |
| [Aqara Temperature and Humidity Sensor](https://www.aqara.com/eu/temperature_humidity_sensor.html) | 7 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)| - | integrated |
| [Aqara door & window contact sensor](https://www.aqara.com/eu/door_and_window_sensor.html)  | 2  | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/) | - |integrated |
| [Aqara Vibration Sensor](https://www.aqara.com/eu/vibration_sensor.html)  | 1  | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/) | - |integrated |
| [Shelly Plus Smoke](https://www.shelly.com/products/product-overview/shelly-plus-smoke)  | 1  | Wi-Fi |[Shelly](https://www.home-assistant.io/integrations/shelly/) | - |integrated |

### <a name="Multimedia">Multimedia</a>
| [Go to Menu](#menu) |
| Device  | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | ------------- | ------------- | ------------- | ------------- |
| [Sonos One](https://www.sonos.com/en/shop/one) | [Sonos](https://amzn.to/3DO0tQj) | 1 | Wi-Fi | [Sonos](https://www.home-assistant.io/integrations/sonos/)|-|integrated|
| [Google Home Mini](https://store.google.com/ch/product/google_nest_mini?pli=1&hl=de) | 1 | Wi-Fi | [Google Cast](https://www.home-assistant.io/integrations/cast/)|-|integrated|
| [Xbox Series X](https://www.xbox.com/en-US/consoles/xbox-series-x?xr=shellnav) | 1 | Wi-Fi | [Xbox](https://www.home-assistant.io/integrations/xbox/) & [Xbox Live](https://www.home-assistant.io/integrations/xbox_live/)|-|integrated|
| Samsung Smart TV 55"| 1 | Wi-Fi| - | - | not integrated |
| LG OLED TV 65"|  1 | Ethernet| [HomeKit-Controller](https://www.home-assistant.io/integrations/homekit_controller/) | - | Integrated |

### <a name="Remotes">Remotes</a>
| [Go to Menu](#menu) |
| Device  | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | ------------- | ------------- | ------------- | ------------- |
| [TRÅDFRI Wireless dimmer](https://www.ikea.com/ch/en/p/tradfri-wireless-dimmer-white-70408595/)| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
| [TRÅDFRI STYRBAR Remote control](https://www.ikea.com/ch/en/p/styrbar-remote-control-white-30488363/)| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
| TRÅDFRI Wireless 5-Button Remote| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
| [TRÅDFRI Shortcut button](https://www.ikea.com/ch/en/p/tradfri-shortcut-button-white-smart-40356381/)| - | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
| [Aquara Wireless Mini Switch](https://www.aqara.com/eu/wireless_mini_switch.html) | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-| integrated |
| [Tuya 4-Gang Switch](https://solution.tuya.com/projects/CMa4ie3gzka6ns) | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-|integrated |
| [Zigbee Button]() | 1 | ConBee II (ZigBee) |[MQTT](https://www.home-assistant.io/integrations/mqtt/)|-|integrated |

# <a name="Climate">Climate</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| Tuya TS0601 Thermostat | [Thermostat](https://amzn.to/3g9q6C0) | 1 | ConBee II (ZigBee) | [MQTT](https://www.home-assistant.io/integrations/mqtt/)|-|integrated 

### <a name="Vacuum">Vacuum</a>
| [Go to Menu](#menu) |
| Device  | Amazon Link | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | :---: | ------------- | ------------- | ------------- | ------------- |
| iRobot Roomba 976 | [Roomba](https://amzn.to/3xKQVBZ) | 1 | Wi-Fi |[iRobot](https://www.home-assistant.io/integrations/roomba/) | Same type as 975 |integrated|
| iRobot Roomba 975 | [Roomba](https://amzn.to/3xKQVBZ) | 1 | Wi-Fi |[iRobot](https://www.home-assistant.io/integrations/roomba/) | Same type as 976 | planned |
### <a name="various">Various</a>
| [Go to Menu](#menu) |
| Device | Quantity | Connection | Home Assistant | Notes | Status |
| ------------- | :---: | ------------- | ------------- | ------------- | ------------- |
| HP OfficeJet Pro 7740 Printer | 1 | Wi-Fi | [IPP](https://www.home-assistant.io/integrations/ipp/) | - | integrated |
| Ender 3 3D-Printer | 1 | Wi-Fi (via OctoPrint) | [OctoPrint](https://www.home-assistant.io/integrations/octoprint/) | used for printing gadgets, mainly holder etc | integrated|
| Visual Studio Code| 1 | - | - | used for editing .yaml or .md Files | - |
| Shelly Plus 1  | 1 | - | - | - | not integrated |

## <a name="Useful-links">Useful Links</a>
| Type  | Link |
| ------------- |  ------------- |
| Website | [HA-Documentation](https://www.home-assistant.io/docs/)|
| Website | [HA-Integrations](https://www.home-assistant.io/integrations/)
| Github-Repository | [Frenck's Config](https://github.com/frenck/home-assistant-config) |

---
| [Go to Table of Contents](#table) | [Affiliate Disclosure](https://github.com/leroyby/Homeassistant/blob/main/affiliate_disclosure.md) |
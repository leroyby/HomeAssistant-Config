[![GitHub last commit](https://img.shields.io/github/last-commit/leroyby/Homeassistant-Config?style=for-the-badge)](https://github.com/leroyby/Homeassistant-Config/commits/main)
[![HA Version](https://img.shields.io/badge/Running%20Home%20Assistant-2022.10.2%20-darkblue)](https://github.com/home-assistant/home-assistant/releases/latest)

# Sensors
- The hardware sensors you can find here: [here](https://github.com/leroyby/Homeassistant/readme.md).
- The non hardware sensors I explain further below this:

# <a name="menu">Menu</a>
| [Home](https://github.com/leroyby/Homeassistant) | [Hardware](https://github.com/leroyby/Homeassistant#sensors) |[Temperature](#temperature)  [MyStrom](#mystrom) | [Binary](#binary) | [Presence](#presence) | [SBB](#sbb) |

## <a name="temperature">[Temperature](https://github.com/leroyby/Homeassistant/blob/main/sensor/temperatur.yaml)</a>
| [Go to Menu](#menu) |
```
To activate the REST API on your MyStrom-Switches you need to navigate to the admin-webinterface via IP and Menu "Expert". 
I use the REST API to get the temperature measurement from the MyStrom-Switches.
Further I use the [HA-Average Sensor addon](https://github.com/Limych/ha-average) for averaging the temperatur in rooms and the whole home.
```

## <a name="mystrom">[MyStrom](https://github.com/leroyby/Homeassistant/blob/main/sensor/mystrom.yaml)</a>
| [Go to Menu](#menu) |
```
To activate the REST API on your MyStrom-Switches you need to navigate to the admin-webinterface via IP and Menu "Expert". 
I use the REST API to get the power measurement
```

## <a name="binary">[Binary Sensors](https://github.com/leroyby/Homeassistant/blob/main/sensor/binary_sensors.yaml)</a>
| [Go to Menu](#menu) |
```
currently not used, just created .yaml
```

## <a name="presence">[Presence Sensors](https://github.com/leroyby/Homeassistant/blob/main/sensor/presence.yaml)</a>
| [Go to Menu](#menu) |
```
currently not used, just created .yaml
```
## <a name="sbb">[SBB Sensors](https://github.com/leroyby/Homeassistant/blob/main/sensor/presence.yaml)</a>
| [Go to Menu](#menu) |
```
Swiss Public Transportation, used for testing the public API
currently not used, just created .yaml
```
---
| [Go to Menu](#menu) | [Home](https://github.com/leroyby/HomeAssistant-Config) |





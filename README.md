
<p align="center">

<img src="https://github.com/homebridge/branding/raw/master/logos/homebridge-wordmark-logo-vertical.png" width="150">

</p>


# Homebridge Plugin for HTTP based lights and switches

This is a Homebridge platform plugin and can be used to incorporate HTTP based lights and switches. The plugin supports any number of switches

## Configuration

The plugin assumes that your lights and switches exposes three URLs:
- Status - this url returns the status of your light or switch
- Turn light on - this url turns your light on 
- Turn light off

# Getting started

1. Install the plugin by seraching foe "awesome http"
2. Make sure you noted down the URLs as stated above for at least one light
3. Click on "Settings"
4. Fill in the General section with name, base url. Please follow and note the explanation below the fields
5. Add your first light
6. Give it a name
7. add the status URL - be aware that the status URL is prepended with the base url
7a. what the heck is a base url - you may safely ignore it (leave it empty) the status url alone is enough
8. add the turn on url - see 7 and 7a
9. add the turn off url - see 7 and 7a
10. click sabe
11. head over to the accessories top menu point

## Limitations

- HTTPS supported (untested)

# Example

I use it to control the 5 lights of the crib my daughter built. 
The lights are controlled by an ESP8266 with a WebServer running on it.
The ESP8266 exposes an Rest like  API, for each of the lights.
E.g. for the fire in front of the crib
- Status - http://crib.local/fire/left
- Turn On - http://crib.local/fire/left/on
- Turn Off - http://crib.local/fire/left/off




See the movie below.
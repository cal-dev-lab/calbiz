#!/usr/bin/env node

// Create emoji
const emoji = require("node-emoji");

// Different emojis
const rocket = emoji.get("rocket");
const camera = emoji.get("camera");
const web = emoji.get("spider_web");
const mail = emoji.get("mailbox");
const phone = emoji.get("phone");

console.log(`

Callum Lees
a.k.a. cal-dev-lab
=====================
# GitHub ${rocket}
https://github.com/cal-dev-lab/

# Behance ${camera}
https://behance.net/callumlees/

# Website ${web}
https://cal-dev-lab.uk/

# Email ${mail}
hi@cal-dev-lab.uk

# Phone ${phone}
+44 (0) 780 777 2956

`);
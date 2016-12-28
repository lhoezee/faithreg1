declare var System: SystemJSLoader.System;

console.dir(JSON.parse('<%= SYSTEM_CONFIG_DEV %>'));
System.config(JSON.parse('<%= SYSTEM_CONFIG_DEV %>'));
console.log(">>>>> Custom Tuya TS0601 converter loaded");

const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;

const definition = {
    fingerprint: [{ modelID: 'TS0601', manufacturerName: '_TZE284_vmcgja59' }],
    model: 'TS0601_vmcgja59',
    vendor: 'Tuya',
    description: 'Custom 4-gang Tuya switch',
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    onEvent: tuya.onEventSetTime,
    configure: tuya.configureMagicPacket,
    exposes: [
        e.switch().withEndpoint('l1'),
        e.switch().withEndpoint('l2'),
        e.switch().withEndpoint('l3'),
        e.switch().withEndpoint('l4'),
    ],
    meta: {
        tuyaDatapoints: [
            { dp: 1, type: 'switch', name: 'l1' },
            { dp: 2, type: 'switch', name: 'l2' },
            { dp: 3, type: 'switch', name: 'l3' },
            { dp: 4, type: 'switch', name: 'l4' },
        ],
    },
    endpoint: (device) => ({
        l1: 1,
        l2: 1,
        l3: 1,
        l4: 1,
    }),
};

module.exports = definition;
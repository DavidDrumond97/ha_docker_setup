console.log(">>>>> Custom Tuya TS0601 converter loaded");

const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;

const definition = {
    fingerprint: [
        {
            modelID: 'TS0601',
            manufacturerName: '_TZE284_vmcgja59',
        },
    ],
    model: 'TS0601_vmcgja59',
    vendor: 'Tuya',
    description: 'Custom Tuya TS0601 24-gang switch (_TZE284_vmcgja59)',

    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    onEvent: tuya.onEventSetTime,
    configure: tuya.configureMagicPacket,

    exposes: [
        e.switch().withState('state_l01', true).withEndpoint('l01'),
        e.switch().withState('state_l02', true).withEndpoint('l02'),
        e.switch().withState('state_l03', true).withEndpoint('l03'),
        e.switch().withState('state_l04', true).withEndpoint('l04'),
        e.switch().withState('state_l05', true).withEndpoint('l05'),
        e.switch().withState('state_l06', true).withEndpoint('l06'),
        e.switch().withState('state_l07', true).withEndpoint('l07'),
        e.switch().withState('state_l08', true).withEndpoint('l08'),
        e.switch().withState('state_l09', true).withEndpoint('l09'),
        e.switch().withState('state_l10', true).withEndpoint('l10'),
        e.switch().withState('state_l11', true).withEndpoint('l11'),
        e.switch().withState('state_l12', true).withEndpoint('l12'),
        e.switch().withState('state_l13', true).withEndpoint('l13'),
        e.switch().withState('state_l14', true).withEndpoint('l14'),
        e.switch().withState('state_l15', true).withEndpoint('l15'),
        e.switch().withState('state_l16', true).withEndpoint('l16'),
        e.switch().withState('state_l17', true).withEndpoint('l17'),
        e.switch().withState('state_l18', true).withEndpoint('l18'),
        e.switch().withState('state_l19', true).withEndpoint('l19'),
        e.switch().withState('state_l20', true).withEndpoint('l20'),
        e.switch().withState('state_l21', true).withEndpoint('l21'),
        e.switch().withState('state_l22', true).withEndpoint('l22'),
        e.switch().withState('state_l23', true).withEndpoint('l23'),
        e.switch().withState('state_l24', true).withEndpoint('l24'),
    ],

    
    endpoint: (device) => {
        return {
            l1: 1,
            l2: 2,
            l3: 3,
            l4: 4,
            l5: 5,
            l6: 6,
            l7: 7,
            l8: 8,
            l9: 9,
            l10: 10,
            l11: 11,
            l12: 12,
            l13: 13,
            l14: 14,
            l15: 15,
            l16: 16,
            l17: 17,
            l18: 18,
            l19: 19,
            l20: 20,
            l21: 21,
            l22: 22,
            l23: 23,
            l24: 24,
        };
        
    },
    meta: {
        tuyaDatapoints: [
            [1,     'state_l01', tuya.valueConverter.onOff],
            [2,     'state_l02', tuya.valueConverter.onOff],
            [3,     'state_l03', tuya.valueConverter.onOff],
            [4,     'state_l04', tuya.valueConverter.onOff],
            [5,     'state_l05', tuya.valueConverter.onOff],
            [6,     'state_l06', tuya.valueConverter.onOff],
            [101,   'state_l07', tuya.valueConverter.onOff],
            [102,   'state_l08', tuya.valueConverter.onOff],
            [103,   'state_l09', tuya.valueConverter.onOff],
            [104,   'state_l10', tuya.valueConverter.onOff],
            [105,   'state_l11', tuya.valueConverter.onOff],
            [106,   'state_l12', tuya.valueConverter.onOff],
            [107,   'state_l13', tuya.valueConverter.onOff],
            [108,   'state_l14', tuya.valueConverter.onOff],
            [109,   'state_l15', tuya.valueConverter.onOff],
            [110,   'state_l16', tuya.valueConverter.onOff],
            [111,   'state_l17', tuya.valueConverter.onOff],
            [112,   'state_l18', tuya.valueConverter.onOff],
            [113,   'state_l19', tuya.valueConverter.onOff],
            [114,   'state_l20', tuya.valueConverter.onOff],
            [115,   'state_l21', tuya.valueConverter.onOff],
            [116,   'state_l22', tuya.valueConverter.onOff],
            [117,   'state_l23', tuya.valueConverter.onOff],
            [118,   'state_l24', tuya.valueConverter.onOff],

        ],
    },
};

module.exports = [definition];
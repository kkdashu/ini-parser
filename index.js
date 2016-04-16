'use strict' 
var util = require('util')

const reg = /^\[([^\]]*)\]$|^([^=]+)(?:=(.*))?$/i;
const parse = (file) => {
    if (util.isBuffer(file)) {
        file = file.toString()
    }
    const lines = file.split(/\r\n|\r|\n/).map(l=>l.trim())
    let result = {},
        section = ''
    for (let line of lines) {
        if (!line || line.match(/^\s*[;#]/)) continue
        const match = line.match(reg)
        if (!match) continue
        let key = match[2],
            value = match[3]
        if (!value && !key) {
            section = match[1].trim()
            result[section] = {}
        } else {
            result[section][key.trim()] = value.trim()
        }
    }
    return result
}

module.exports = parse;

var path = require('path');
var fs = require('fs');
var iniParse = require('../index');

describe('ini', () => {
    it('parse', (done) => {
        const filePath = path.resolve('spec/files/.gitconfig');
        fs.readFile(filePath, (err, data) => {
            const result = iniParse(data);
            const exp = {
                user: {
                    name: 'kkdashu',
                    email: 'wmeng17@gmail.com'
                },
                ui: {
                    color: 'auto'
                }
            }
            expect(result).toEqual(exp);
            done();
        });
    });


    it('boot.ini file', (done) => {
        const filePath = path.resolve('spec/files/boot.ini');
        fs.readFile(filePath, 'utf-8', (err, data) => {
            const result = iniParse(data);
            const exp = {
                "boot loader": {
                    "timeout": '40',
                    "default": "multi(0)disk(0)rdisk(0)partition(1)\\WINDOWS"
                },
                "operating systems": {
                    "multi(0)disk(0)rdisk(0)partition(1)\\WINDOWS": '"Microsoft Windows XP Professional" /fastdetect'
                }
            }
            expect(result).toEqual(exp);
            done()
        })
    })
})

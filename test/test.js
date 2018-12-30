var str2bytes = require('../str2bytes.node').str2bytes;
var bytes2str = require('../str2bytes.node').bytes2str;
var assert = require('assert');

describe('str2bytes.js', function () {
    describe('str2bytes', function () {
        it('converting latin string', function () {
            var str = 'This is a latin string!';
            var bytes = str2bytes(str);
            var buffer = Buffer.from(str);

            assert.strictEqual(bytes.length, buffer.length);

            var i = 0;
            var length = bytes.length;

            while (i < length) {
                assert.strictEqual(bytes[i], buffer[i]);
                i += 1;
            }
        });

        it('converting multi-byte string', function () {
            var str = '这是一个测试文本！';
            var bytes = str2bytes(str);
            var buffer = Buffer.from(str);

            assert.strictEqual(bytes.length, buffer.length);

            var i = 0;
            var length = bytes.length;

            while (i < length) {
                assert.strictEqual(bytes[i], buffer[i]);
                i += 1;
            }
        });

        it('converting emoji string', function () {
            var str = '😈🙂👋';
            var bytes = str2bytes(str);
            var buffer = Buffer.from(str);

            assert.strictEqual(bytes.length, buffer.length);

            var i = 0;
            var length = bytes.length;

            while (i < length) {
                assert.strictEqual(bytes[i], buffer[i]);
                i += 1;
            }
        });

        it('converting mixed string', function () {
            var str = '苹果（🍎）对应的英文单词为 Apple，😈🙂👋。';
            var bytes = str2bytes(str);
            var buffer = Buffer.from(str);

            assert.strictEqual(bytes.length, buffer.length);

            var i = 0;
            var length = bytes.length;

            while (i < length) {
                assert.strictEqual(bytes[i], buffer[i]);
                i += 1;
            }
        });
    });

    describe('bytes2str', function () {
        it('to latin string', function () {
            var str = 'This is a latin string!';
            var bytes1 = [].slice.call(Buffer.from(str));
            var bytes2 = str2bytes(str);
            var str1 = bytes2str(bytes1);
            var str2 = bytes2str(bytes2);

            assert.strictEqual(str, str1);
            assert.strictEqual(str, str2);
        });

        it('to multi-byte string', function () {
            var str = '这是一个测试文本！';
            var bytes1 = [].slice.call(Buffer.from(str));
            var bytes2 = str2bytes(str);
            var str1 = bytes2str(bytes1);
            var str2 = bytes2str(bytes2);

            assert.strictEqual(str, str1);
            assert.strictEqual(str, str2);
        });

        it('to emoji string', function () {
            var str = '😈🙂👋';
            var bytes1 = [].slice.call(Buffer.from(str));
            var bytes2 = str2bytes(str);
            var str1 = bytes2str(bytes1);
            var str2 = bytes2str(bytes2);

            assert.strictEqual(str, str1);
            assert.strictEqual(str, str2);
        });

        it('to mixed string', function () {
            var str = '苹果（🍎）对应的英文单词为 Apple，😈🙂👋。';
            var bytes1 = [].slice.call(Buffer.from(str));
            var bytes2 = str2bytes(str);
            var str1 = bytes2str(bytes1);
            var str2 = bytes2str(bytes2);

            assert.strictEqual(str, str1);
            assert.strictEqual(str, str2);
        });
    });
});

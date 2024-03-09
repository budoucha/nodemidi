const midi = require('midi');

const input = new midi.Input();

// 入力可能なMIDIデバイスの数を取得
const ports = input.getPortCount();

for (let i = 0; i < ports; i++) {
    console.log(input.getPortName(i));
}

input.openPort(0);

input.on('message', (deltaTime, message) => {
    console.log(`m: ${message} d: ${deltaTime}`)
});

// プログラム終了時にポートを閉じる
process.on( 'SIGINT', () => {
    input.closePort();
    process.exit();
});

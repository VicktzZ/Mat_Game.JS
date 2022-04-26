export default function sleep(ms = 2000) {
    return new Promise(r => setTimeout(r, ms))
}
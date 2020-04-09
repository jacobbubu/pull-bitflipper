import * as pull from 'pull-stream'

export default function (prob: number) {
  return pull.map(function (data: Buffer) {
    if ((Number.isInteger(prob) && --prob === 0) || Math.random() < prob) {
      const rbit = 1 << (8 * Math.random())
      const i = Math.floor(Math.random() * data.length)
      data[i] = data[i] ^ rbit
    }
    return data
  })
}

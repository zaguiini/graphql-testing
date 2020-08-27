export const responseStub = <T>(result: T) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        json() {
          return Promise.resolve(result)
        },
        ok: true,
        text() {
          return Promise.resolve(JSON.stringify(result))
        }
      })
    }, 200)
  })
}

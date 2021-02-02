const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://tri-do-video-website.herokuapp.com'
const Command = async (command, payload) => {
  let url = new URL(`${HOST}/${command}`)
  if (payload) {
    let params = new URLSearchParams()
    Object.keys(payload).forEach(key => params.append(key, payload[key]))
    url.search = params
  }
  let res = await fetch(url)
  return res.json()
}

export default Command
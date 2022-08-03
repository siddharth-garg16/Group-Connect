const APP_ID = "baeb9752fd88451b87ad2e2738a8b4ff"
const CHANNEL = "main"
const TOKEN = "006baeb9752fd88451b87ad2e2738a8b4ffIAAkiTQaD76jkSkOZiOV66zcu5fyBV0GcWq5GPHqeVqyM2TNKL8AAAAAEACOhaHH4IbrYgEAAQDZhuti"
let UID;

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                  <div class="username-wrapper"><span class="user-name">MyName</span></div>
                  <div class="video-player" id="user-${UID}"></div>
                  </div>`

    document.getElementById("video-streams").insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()
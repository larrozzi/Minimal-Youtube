import axios from 'axios'

const KEY = "AIzaSyCSQ0PdHbrlg6X2Ex2DE0DYy-EPFtaTW7s"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
})  
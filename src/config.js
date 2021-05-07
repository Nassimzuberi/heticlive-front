export const url = process.env.NODE_ENV === "production" ? "http://heticlive.herokuapp.com" : "http://localhost:3001";

export const nms_url = process.env.NODE_ENV === "production" ? "http://20.199.65.242:8888" : "http://localhost:8888"

export const rtmp_url = process.env.NODE_ENV === "production" ? "http://20.199.65.242:1935" : "http://localhost:1935"
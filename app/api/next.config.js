module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        connectionString: "mongodb+srv://damodharmeshrama1:KyGK6LsDMyNGJhLL@cluster0.tcowbeq.mongodb.net/?retryWrites=true&w=majority",
        secret: '87887YTYTYTYVVHGHGHGHHGafsfsffsfsfdfd'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}
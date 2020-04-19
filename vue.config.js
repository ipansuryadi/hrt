module.exports = {
  devServer: {
    proxy: {
      "/auth/login": {
        target: "http://localhost:1212",
        changeOrigin: true,
        secure: false,
        xfwd: false,
        pathRewrite: { "^/auth/login": "/login" }
      }
    }
  }
};

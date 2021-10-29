module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
					@import "@/assets/scss/main.scss";
				`,
      },
    },
  },
};

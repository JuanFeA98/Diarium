module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Diarium",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-firebase",
      options:{
        credentials:{
          apiKey: "AIzaSyBi1SIgUVilgszQgMSU1lMHw93ppIyEz0o",
          authDomain: "diarium-a6a54.firebaseapp.com",
          projectId: "diarium-a6a54",
          storageBucket: "diarium-a6a54.appspot.com",
          messagingSenderId: "834859395258",
          appId: "1:834859395258:web:29906c32b1c560893cba83"
        }
      }
    }
  ],
};

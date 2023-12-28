// "H5": [
//   {
//     "entry": "index.js",
//     "extType": "web_video_com",
//     "platform": "web"
//   }
// ]

module.exports = {
  plugins: [
    {
      pluginType: 'BeyondBuilderPlugin',
      pluginName: 'Demo',
      builder: null,

      apply (beyondBuilder) {
        this.builder = beyondBuilder

        beyondBuilder.hooks.startBefore.tap('Demo', () => {
          this.ensureH5BuildTypeExist()
          this.replaceMockSDK()

          beyondBuilder.webBuilder.webpackExecutor.addScript({
            src: 'https://xxx.xx.js',
            append: false // false - 在html plugin插入webpack的bundle-script-tag之前，插入该脚本
          })
        })
      },

      ensureH5BuildTypeExist () {
        const options = this.builder.startOptions
        const config = options.config
        if (!config.buildConfig.H5) {
          config.buildConfig.H5 = [
            {
              'entry': 'index.js',
              'extType': 'mock_web_video_com',
              'platform': 'web'
            },
            {
              'entry': 'index_streamer.js',
              'extType': 'mock_zs_panel',
              'platform': 'web'
            }
          ]
        }
      },

      replaceMockSDK () {
        const options = this.builder.startOptions
        options.config.webSDKVersion = 'https://xxxx.xxx.xx/sdk.js'
      }
    }
  ]
}

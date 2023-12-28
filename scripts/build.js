const buider = require('@hyext/builder-beyond')
const path = require('path')
const htmlParser = require('node-html-parser')
const historyVersion = `version` + `/1-2-24/`
const root = path.resolve(__dirname, '../')
const dist = path.resolve(__dirname, '../website')
const fs = require('fs')
const chalk = require('chalk')

function addVersion (src) {
  // eslint-disable-next-line no-return-assign
  return src += '?v=' + Date.now()
}

function addQueryParmas () {
  const indexHtml = path.join(dist, 'h5/index_web_video_com.html')
  if (fs.existsSync(indexHtml)) {
    const source = fs.readFileSync(indexHtml, 'utf-8')
    const root = htmlParser.parse(source, {
      comment: true,
      script: true,
      style: true,
      pre: true
    })
    const scripts = root.querySelectorAll('script')
    if (scripts && scripts.length) {
      scripts.forEach((scriptElm) => {
        let src = scriptElm.getAttribute('src')
        if (src) {
          src = addVersion(src)
          scriptElm.setAttribute('src', src)
        }
      })
      fs.writeFileSync(indexHtml, root.toString())
      console.log(chalk.green('h5/index_web_video_com.html附加版本号成功'))
    }
  }
}

function build () {
  const buidOpts = {
    config: {
      buildConfig: {
        H5: [
          {
            "entry": "index.js",
            "extType": "web_video_com",
            "platform": "web"
          },
          {
            "entry": "index.js",
            "extType": "pc_panel",
            "platform": "pc"
          }
        ]
      },
      enableVW: true
    },
    inputPath: root,
    outputPath: dist,
    publicPath: `/web/hy-ui-doc/`,
    projectName: 'hy-ui-doc'
  }

  return buider.build(buidOpts)
}

async function bootstrap () {
  await build()
  addQueryParmas()
  process.exit(0)
}
bootstrap()

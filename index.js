import { registerApp } from '@hyext-beyond/core'
import App from './hy-ui-demo/app'

hyExt.app.disableContainerGesture(true)

registerApp('hy-ui-demo', App)

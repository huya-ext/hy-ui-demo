import { NativeUI } from '@hyext-beyond/hy-ui-native'
import React from 'react'
import './index.hycss'

const { SvgImage } = NativeUI

function Index () {
  return (
    <SvgImage width="200" height="200" className="margin" /* 不要在class上使用width，height */ src={require('../../img/homer-simpson.svg')}></SvgImage>
  )
}

export default Index

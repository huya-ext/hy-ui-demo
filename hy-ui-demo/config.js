
import BackgroundImage from '../components/background-image'
import Image from '../components/image'
import Button from '../components/button'
import View from '../components/view'
import Input from '../components/input'
import Text from '../components/text'
import ScrollView from '../components/scrollview'
import Switch from '../components/switch'
import Slider from '../components/slider'
import Indicator from '../components/indicator'
import Datepicker from '../components/date-picker'
import Timepicker from '../components/time-picker'
import Form from '../components/form'
import Picker from '../components/picker'
import Checkbox from '../components/checkbox'
import Radio from '../components/radio'
import Stepper from '../components/stepper'
import Cascader from '../components/cascader'
import Dropdown from '../components/dropdown'
import Icon from '../components/icon'
import Progress from '../components/progress'
import Tip from '../components/tip'
import Dialog from '../components/dialog'
import Actionsheet from '../components/action-sheet'
import Scrollpicker from '../components/scroll-picker'
import SlideModal from '../components/slide-modal'
import Tab from '../components/tab'
import Tag from '../components/tag'
import Topview from '../components/topview'
import NavigationBar from '../components/navigation-bar'
import Popover from '../components/popover'
import Modal from '../components/modal'
import Longlist from '../components/longlist'
import Badge from '../components/badge'
import BottomModal from '../components/bottom-modal'
import Rate from '../components/rate'
import Canvas from '../components/canvas'
import Sound from '../components/sound'
import Vibration from '../components/vibration'
import LinearGradient from '../components/linear-gradient'
import SvgImage from '../components/svg-image'
import VideoAnimated from '../components/video-animated'
import Avatar from '../components/avatar'
import SafeImage from '../components/safe-image'
import FullImage from '../components/full-image'
import Router from '../components/route-screen'
import LottieView from '../components/lottie-view'
import NativeImage from '../components/native-image'
import NativeInput from '../components/native-input'

export const components = [
  {
    name: 'Avatar',
    component: Avatar,
    title: '头像'
  },
  {
    name: 'Actionsheet',
    component: Actionsheet,
    title: '行动面板'
  },
  {
    name: 'BackgroundImage',
    component: BackgroundImage,
    title: '背景容器'
  },
  {
    name: 'BottomModal',
    component: BottomModal,
    title: '顶层底部模型'
  },
  {
    name: 'Badge',
    component: Badge,
    title: '徽章'
  },
  {
    name: 'Button',
    component: Button,
    title: '按钮'
  },
  {
    name: 'Canvas',
    component: Canvas,
    title: '画布'
  },
  {
    name: 'Checkbox',
    component: Checkbox,
    title: '单选框'
  },
  {
    name: 'Cascader',
    component: Cascader,
    title: '级联'
  },
  {
    name: 'Dialog',
    component: Dialog,
    title: '对话框'
  },
  {
    name: 'Dropdown',
    component: Dropdown,
    title: '下拉'
  },
  {
    name: 'Datepicker',
    component: Datepicker,
    title: '日期选择器'
  },
  {
    name: 'FullImage',
    component: FullImage,
    title: '填充图片'
  },
  {
    name: 'Form',
    component: Form,
    title: '表单',
  },
  {
    name: 'Image',
    component: Image,
    title: '图片'
  },
  {
    name: 'Input',
    component: Input,
    title: '输入框'
  },
  {
    name: 'Icon',
    component: Icon,
    title: '小图标'
  },
  {
    name: 'Indicator',
    component: Indicator,
    title: '指示器'
  },
  {
    name: 'Longlist',
    component: Longlist,
    title: '长列表'
  },
  {
    name: 'LinearGradient',
    component: LinearGradient,
    title: '背景色渐变'
  },
  {
    name: 'LottieView',
    component: LottieView,
    title: 'Lottie动画'
  },
  {
    name: 'Modal',
    component: Modal,
    title: '顶层模型'
  },
  {
    name: 'Popover',
    component: Popover,
    title: '冒泡'
  },
  {
    name: 'Picker',
    component: Picker,
    title: '选择器'
  },
  {
    name: 'Progress',
    component: Progress,
    title: '进度条'
  },
  {
    name: 'NavigationBar',
    component: NavigationBar,
    title: '导航栏'
  },
  {
    name: 'NativeImage',
    component: NativeImage,
    title: '原生图片'
  },
  {
    name: 'NativeInput',
    component: NativeInput,
    title: '原生输入'
  },
  {
    name: 'Radio',
    component: Radio,
    title: '单选框'
  },
  {
    name: 'Rate',
    component: Rate,
    title: '评分'
  },
  {
    name: 'Router',
    component: Router,
    title: '路由'
  },
  {
    name: 'ScrollView',
    component: ScrollView,
    title: '滚动容器'
  },
  {
    name: 'SlideModal',
    component: SlideModal,
    title: '滑动模型'
  },
  {
    name: 'Scrollpicker',
    component: Scrollpicker,
    title: '滚动选择器'
  },
  {
    name: 'Switch',
    component: Switch,
    title: '开关'
  },
  {
    name: 'Slider',
    component: Slider,
    title: '滑块'
  },
  {
    name: 'Stepper',
    component: Stepper,
    title: '计数器'
  },
  {
    name: 'SafeImage',
    component: SafeImage,
    title: '安全图片'
  },
  {
    name: 'SvgImage',
    component: SvgImage,
    title: 'Svg图片'
  },
  {
    name: 'Sound',
    component: Sound,
    title: '声音'
  },
  {
    name: 'Tab',
    component: Tab,
    title: '标签'
  },
  {
    name: 'Tag',
    component: Tag,
    title: '标记'
  },
  {
    name: 'Text',
    component: Text,
    title: '文本'
  },
  {
    name: 'Timepicker',
    component: Timepicker,
    title: '时间选择器'
  },
  {
    name: 'Tip',
    component: Tip,
    title: '提示'
  },
  {
    name: 'Topview',
    component: Topview,
    title: '顶层视图'
  },
  {
    name: 'View',
    component: View,
    title: '容器'
  },
  {
    name: 'VideoAnimated',
    component: VideoAnimated,
    title: '视频动画'
  },
  {
    name: 'Vibration',
    component: Vibration,
    title: '震动'
  }
]

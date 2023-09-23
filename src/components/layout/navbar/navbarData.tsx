import Home from '../../../asset/images/NavBar/home.svg'
import Level from '../../../asset/images/NavBar/levels.svg'
import Settings from '../../../asset/images/NavBar/settings.svg'
import Uploads from '../../../asset/images/NavBar/uploads.svg'
import Notification from '../../../asset/images/NavBar/notification.svg'

export interface menuData {
 name: string
 img: string
 routeName: string
}

const Data : Array<menuData> = [
 {
  name: 'Home',
  img: Home,
  routeName: '/'
 },
 {
  name: 'OurLevels',
  img: Level,
  routeName: '/levels'
 },
 {
  name: 'Notification',
  img: Notification,
  routeName: '/notification'
 },
 {
  name: 'Uploads',
  img: Uploads,
  routeName: '/upload'
 },
]

export default Data;
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/comperman/Layout';
import Null from '~/pages/Null';
import ShoppingCart from '~/pages/Shoppingcart';
import Historybuy from '~/pages/Historybuy';
import Dangky from '~/pages/Dangky';
import Help from '~/pages/Help';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/shoppingcart', component: ShoppingCart, layout: HeaderOnly },
    { path: '/null', component: Null, layout: null },
    { path: '/historybuy', component: Historybuy, layout: HeaderOnly },
    { path: '/dangky', component: Dangky, layout: HeaderOnly },
    { path: '/help', component: Help, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

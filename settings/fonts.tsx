import { DM_Sans, Poppins } from 'next/font/google';
import localFont from 'next/font/local'
import {cn} from '@/lib/utils'

const PPSupplySans = localFont({
    src: '../public/fonts/PPSupplySans/PPSupplySans-Regular.woff2',
    weight: '400',
    style: 'normal',
    display: 'swap',
})
const poppins = Poppins({ subsets: ['latin'], weight: ['200','300','400', '500', '600', '700'], display: 'swap' });


const dmSans = DM_Sans({ subsets: ['latin'] });
 
export default dmSans.className
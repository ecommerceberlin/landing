import { DM_Sans, Poppins } from 'next/font/google';
import localFont from 'next/font/local'

const PPSupplySans = localFont({
src: './fonts/PPSupplySans/PPSupplySans-Regular.woff2',
weight: '400',
style: 'normal',
})

const dmSans = DM_Sans({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['200','300','400', '500', '600', '700'] });

export { dmSans, poppins, PPSupplySans };
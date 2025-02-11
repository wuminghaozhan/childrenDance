import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
 

export default function ChildrenDanceLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <img src="/public/images/childrenDance.jpeg" alt="logo" /> */}
      <Image
        src="/images/children-dance.jpeg"
        width={60}
        height={60}
        alt="logo"
      />
      {/* <Image
                  src="/hero-desktop.png"
                  width={560}
                  height={620}
                  className="block mb:hidden"
                  alt="Screenshots of the dashboard project showing desktop version"
                /> */}
      <p className="text-[20px]">小舞舞蹈</p>
    </div>
  );
}

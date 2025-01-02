"use client";
import { usePathname } from "next/navigation";
import styles from './index.module.css'
import Link from "next/link";


export default function NavList() {
    const navItems =[
        { title: '首页', link: '/index/home' },
        { title: '关于我们', link: '/index/about' },
        { title: '联系我们', link: '/index/contact' },
        { title: '学员风采', link: '/index/students' },
        { title: '幸福寄语', link: '/index/blessing' },
        { title: '写给家长的信', link: '/index/letter' },
    ]
    const pathname = usePathname()
    return (
        <ul className={styles.navList}>
            {navItems.map((item, index) => (
                <li className={`${styles.nav} ${pathname === item.link ? styles.activeNav : ''}`} key={index}>
                    <Link href={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
}
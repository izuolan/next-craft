import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import {
  HomeIcon,
  ArchiveIcon,
  UserIcon,
  MenuIcon
} from '@heroicons/react/outline'
import ThemeSwitcher from './ThemeSwitcher.js'

const NavBar = ({ siteConfigObj }) => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const links = [
    {
      id: 0,
      name: siteConfigObj['Home Menu Text'],
      to: '/',
      icon: <HomeIcon className='inline-block mb-1 h-5 w-5' />,
      show: true
    },
    {
      id: 1,
      name: siteConfigObj['Archive Menu Text'],
      to: '/archive',
      icon: <ArchiveIcon className='inline-block mb-1 h-5 w-5' />,
      show: true
    },
    {
      id: 2,
      name: siteConfigObj['About Menu Text'],
      to: '/about',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      show: true
    }
  ]
  return (
    <div className='flex'>
      <ul className='hidden md:flex md:gap-1'>
        {links.map(
          (link) => link.show && (
            <Link passHref key={link.id} href={link.to}>
              <li className={`${activeMenu === link.to ? 'bg-gray-100 dark:bg-gray-700' : ''} hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav`}>
                <a className='font-light'>
                  {link.icon}
                  <span className='inline-block m-1'>{link.name}</span>
                </a>
              </li>
            </Link>
          )
        )}
      </ul>

      <ThemeSwitcher />

      <div className='md:hidden mr-2 block '>
        <button
          type='button'
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className='hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block p-2 -mr-3 md:pb-3'
        >
          <MenuIcon className='inline-block mb-1 h-5 w-5' />
        </button>
        {showMenu && (
          <div className='absolute right-0 w-40 mr-4 mt-2 origin-top-right bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 rounded-md shadow-lg outline-none'>
            <div className='py-1'>
              {links.map(
                (link) =>
                  link.show && (
                    <Link passHref key={link.id} href={link.to}>
                      <a className='hover:bg-gray-100 dark:hover:bg-gray-600 font-light block justify-between w-full px-4 py-2 leading-5'>
                        {link.icon}
                        <span className='m-1'>{link.name}</span>
                      </a>
                    </Link>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const Header = ({ navBarTitle, siteConfigObj }) => {
  const [showTitle, setShowTitle] = useState(false)
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setShowTitle(true)
      } else {
        setShowTitle(false)
      }
    })

    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef])
  return (
    <>
      <div className='observer-element h-4 md:h-12' ref={sentinalRef}></div>
      <div
        className='sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 max-w-2xl px-4'
        id='sticky-nav'
        ref={navRef}
      >
        <div className='flex items-center'>
          <Link passHref href='/'>
            <a aria-label={siteConfigObj['Site Title']}>
              <div className='h-6 hover:text-blue-500 dark:hover:text-blue-500 fill-current'>
                <img alt='logo' className='w-6 h-6' src={siteConfigObj['Site Logo']} />
              </div>
            </a>
          </Link>
          <p className={`ml-2 font-medium ${!showTitle ? 'hidden' : 'hidden xl:block'}`}>
            {navBarTitle}
          </p>
        </div>
        <NavBar siteConfigObj={siteConfigObj} />
      </div>
    </>
  )
}

export default Header

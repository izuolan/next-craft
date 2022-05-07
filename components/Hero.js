import Link from 'next/link'
import Avatar from './Avatar.js'
import Social from './Social.js'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const Hero = () => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:w-3/5 md:items-start mb-6 md:mb-0 text-left'>
          <p className='leading-relaxed'>{t.HERO.TEXT_HEAD}</p>
          <ul className='m-4 leading-relaxed'>
            <li className='list-disc'>{t.HERO.TEXT_1}</li>
            <li className='list-disc'>{t.HERO.TEXT_2}</li>
            <li className='list-disc'>{t.HERO.TEXT_3}</li>
          </ul>
          <Social />
          <div className='flex flex-col sm:flex-row sm:justify-center gap-4 mt-6'>
            <Link passHref href='https://github.com/izuolan/next-craft'>
              <button className='bg-white shadow-md dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center'>
                <svg
                  className='inline-block text-gray-600 dark:text-day h-8 w-8'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z' />
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.GITHUB_BUTTON_DES}
                  </span>
                  <span className='font-medium'>
                    {t.HERO.GITHUB_BUTTON}
                  </span>
                </span>
              </button>
            </Link>
            <Link passHref href='https://zuolan.me/en/next_craft_en'>
              <button className='bg-white shadow-md dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center'>
                <svg
                  className='inline-block text-gray-600 dark:text-day h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.DOCS_BUTTON_DES}
                  </span>
                  <span className='font-medium'>
                    {t.HERO.DOCS_BUTTON}
                  </span>
                </span>
              </button>
            </Link>
          </div>
          <div className='text-gray-400 text-xs font-light py-4'>
            {t.HERO.NOTICE_TEXT}
          </div>
        </div>
        <div className='w-2/5'>
          <Avatar className='text-gray-600 dark:text-gray-300' />
        </div>
      </div>
    </>
  )
}

export default Hero

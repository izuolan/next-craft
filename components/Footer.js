import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const Footer = () => {
  const { locale } = useRouter()
  const t = lang[locale]

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since

  return (
    <div className='mt-6 flex-shrink-0 m-auto w-full text-gray-600 dark:text-gray-300 transition-all max-w-2xl px-4'>
      <footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='text-gray-400 text-xs font-light py-4 border-t dark:border-gray-600'>
          © {from === y || !from ? y : `${from} - ${y}`} | {BLOG.author}
          <p className='md:float-right'>
            {t.FOOTER.COPYRIGHT_START}
            <a className='underline' href={`${t.FOOTER.COPYRIGHT_LINK}`}>
              {t.FOOTER.COPYRIGHT_NAME}
            </a>
            {t.FOOTER.COPYRIGHT_END}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer

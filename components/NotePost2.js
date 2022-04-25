import Link from 'next/link'
import Image from 'next/image'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const NotePost = ({ note }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  const craftSlug = note.link.slice(23)

  if (note.title === 'NULL') {
    return (
      <div className='text-gray-400 text-xs font-light py-4'>
        {t.ERROR.CRAFTDOCS_ERROR}
      </div>
    )
  }

  return (
    <Link passHref href={`/post/${note.path}`}>
      <a key={craftSlug} className='mb-10 group flex items-end hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg overflow-hidden relative p-4'>
        <div className="w-full flex flex-col md:flex-row items-center gap-4 lg:gap-6">
          <div className="w-full md:w-24 lg:w-40 md:h-24 lg:h-40 h-56 block self-start shrink-0 overflow-hidden rounded-lg shadow-lg relative">
            <Image
              className="object-cover object-center md:object-right absolute inset-0 group-hover:scale-110 transition duration-200"
              src={`https://api.craft.do/render/preview/${craftSlug}`}
              alt={`${note.title}`}
              layout='fill'
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">
              <span>{note.title}</span>
            </h2>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default NotePost

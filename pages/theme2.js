import Container from '@/components/Container'
import NotePost2 from '@/components/NotePost2'
import { getAllNotes } from '@/lib/craft'
import BLOG from '@/blog.config'
import Hero from '@/components/Hero'

export async function getStaticProps() {
  const notes = await getAllNotes()
  return {
    props: {
      notes
    },
    revalidate: 10
  }
}

const Notes = ({ notes }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <Hero />
      {notes.map((note) => (
        <NotePost2 key={note.link} note={note} />
      ))}
    </Container>
  )
}

export default Notes

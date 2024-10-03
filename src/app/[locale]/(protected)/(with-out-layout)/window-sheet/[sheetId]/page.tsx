import Sheet from '@/components/sheet/sheet'

type PageProps = {
  params: {
    sheetId: string
  }
}

export default function FichaPage({ params }: PageProps) {
  const { sheetId } = params
  return (
    <section className='w-full h-full flex justify-center items-center'>
      <Sheet />
    </section>
  )
}

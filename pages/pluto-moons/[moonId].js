import Image from 'next/image'

function MoonDetailPage({ moon }) {
  return (
    <div>
      <h1>The Moon Detail Page</h1>
      <p>Name: {moon.name}</p>
      <p>ID: {moon.id}</p>
      <p>Description: {moon.description}</p>
      <Image src={moon.image} width={300} height={300} />
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log('getServerSideProps:', context)

  const moonId = context.query.moonId

  const result = await fetch(
    `https://react-refresher-f5152-default-rtdb.firebaseio.com/portfolio/${moonId}.json`
  )

  const data = await result.json()

  if (!data) {
    return {
      redirect: {
        destination: '/pluto-moons',
        permanent: false,
      },
    }
  }

  return {
    props: {
      moon: {
        id: moonId,
        ...data,
      },
    },
  }
}

export default MoonDetailPage

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

function PlutoMoonsPage() {
  const [moons, setMoons] = useState()
  const router = useRouter()

  useEffect(() => {
    console.log('useEffect called')
    fetch('api/moons')
      .then((res) => res.json())
      .then((data) => setMoons(JSON.parse(data.moons)))
  }, [])

  return (
    <div>
      <h1>The Pluto Moons Page</h1>
      {moons && (
        <ul>
          {moons.map((moon) => (
            // <li key={moon.id}>{moon.name}</li>
            <li key={moon.id}>
              <button onClick={() => router.push(`/pluto-moons/${moon.id}`)}>
                {moon.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PlutoMoonsPage

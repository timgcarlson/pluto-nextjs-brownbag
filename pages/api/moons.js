export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not avaialble' })
  }

  const result = await fetch(
    'https://react-refresher-f5152-default-rtdb.firebaseio.com/portfolio.json'
  )

  const data = await result.json()

  let moons = []
  for (const key in data) {
    moons.push({
      id: key,
      ...data[key],
    })
  }

  res.status(200).json({ moons: JSON.stringify(moons) })
}

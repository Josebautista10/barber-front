import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [barbers, setBarbers] = useState()
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/barbers`)
      .then((response) => response.json())
      .then((data) => setBarbers(data))

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  },[])
  console.log(barbers)
  
  // const mappedBarbers = barbers.length > 0 && barbers.map(barber => {
  //   return (
  //     <ul>
  //       <li>{barber}</li>
  //     </ul>
  //   )
  // })
  return (
    <>
      {/* <h1>{barbers? mappedBarbers: 'loading'}</h1> */}
    </>
  )
}

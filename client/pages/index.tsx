import type { NextPage } from 'next'

import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

const Home: NextPage = observer(() => {

  const router = useRouter()
  
  return (
    <div>
      <button
        onClick={() => {
          fetch('http://localhost:8080/auth/users').then(res => res.json()).then(res => console.log(res))
        }}
      >создать доску</button>
    </div>
  )
})

export default Home

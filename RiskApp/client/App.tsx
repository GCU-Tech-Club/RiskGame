// Importing shared types
import { User } from '@shared/types'
function App() {

  const user: User = {
    id: '123'
  }

  return (
    <div>
      {user.id}
    </div>
  )
}

export default App

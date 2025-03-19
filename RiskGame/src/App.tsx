// Importing shared types
import { User } from '@shared/types'

export const App = () => {

  const user: User = {
    id: '123'
  }

  return (
    <div>
      {user.id}
    </div>
  )
}

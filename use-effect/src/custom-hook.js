import User from './components/user/user.component'
import Post from './components/post/post.component'

import { CustomHookContainer } from './custom-hook.styles'

function CustomHookComponent() {
  return (
    <CustomHookContainer>
      <User userId={5} />
      <Post postId={5} />
    </CustomHookContainer>
  )
}

export default CustomHookComponent
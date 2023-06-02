'use client';
import React, { useState, useContext } from 'react'
import { AuthContext } from '@/contexts/AuthProvider';
import Image from 'next/image';

const Page = () => {
  const {loggedUser} = useContext(AuthContext);
  
  return (
    <div className='container max-w-md mx-auto'>
      {loggedUser && 
      <div className='flex '>
        用户名：{loggedUser.username}
        邮箱:{loggedUser.email}

        <Image src={`https://se6318.s3.ap-northeast-2.amazonaws.com/5e1eaced8a1363273cfac2fed48fa0ec09fac72e.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaDmFwLW5vcnRoZWFzdC0yIkcwRQIgPIj4A7%2FCBD%2FDZkbYxffimNDE3U6s8j1t%2FVlpzgngvFgCIQCVTffzXMnt%2FaRi6EfdZaCB0QLBTkAdzZC4l23fdokJISrtAgiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA0MjQyNTcxOTkzNyIM6W9ZzgX%2FSX3Qe155KsECQJpSA%2BMm3%2BbZyFdrkcX%2BhHyJGFGR771Iqr4qy9X0mewPcwHRe1p89XvBh5PT%2Fa7OUn%2BWcRaSbyuaDAbYDR0Vc%2BouChJEDyo1WAONhczUqB8LRwnryZlkcxaL%2BKuAK4Cmx%2FQSvvWjWtlKfrpKEShE48wHN1I2SLsXdVgZDAWEqvX2k60s5CHEfiruyRngGdE79PGeRoPsT2ekqIN98h%2FB%2F3Jtt%2BOEKaAOmVigx6QF8sYQpwRlwB2aqxs7EXfoaMpjx3yFiZx5JQpvn5PnawcZh5YxTErsyAQNL9oUY6Dq9gK7Aptk01EafTgIW09zVktm0b7J205fzlLeXoHN2rS2S52DzUzL0YqVIdiXYmQCeLPWoipt2EQw6ZwuEXn7loeXQlU5nW9tf5pfwZA%2FETqc2UqFXMUSft824Zyu5JyBpOubMNDo36MGOrMC4hR5Sdlfc9kiEoR2%2Ft3CpmF0gd%2BqlrLmYIJw9apbdJ3GrZanwsXe5AT5GADCey2vwFGzUZssdgYl1Oof%2BzH0incQGFQ9wZs4DzIqDdtOCP%2FL9NXDsMLu%2BttWGg1YSAaIzyBbY2poe3LI%2Bmq%2FKaqMgzgI9kd0Bk9o2UMv5yO419e5mqfRtJGYee%2FSfBSy80rlYej%2BhCqaEgEbQhF%2Bvy10KO8oGZZyMaA9EaljLUD122y0m2uJ0kMkOTbiwy3nw1XbRsQgW7%2FGEhHjByDLiGZs0LjVtFEN5erTVyst7nGKCjrJuSOFhKxpAwwrMxd%2BQFUoFbrLM0wJ%2BWhRh62iL%2BxuP4oVNwaEw67ETMdpB8IO3by964WGaqSE1CV0jk2cj43scCUlXpa0k%2BcbZJEfiX0sbSFNaw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230601T014931Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAQTYGFDSA3YCLQKBH%2F20230601%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=131c74389f60ce81a45a7e6a5a2ab5496cb4009a2f9e9da5832c5b1504848cf1`} alt="Avatar" width={60} height={60} />
       
      </div>
      }
    </div>
  )
}

export default Page
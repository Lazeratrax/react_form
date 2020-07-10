// import React, { createContext, useContext, useMemo } from 'react'
import React, {createContext, useContext, useMemo} from 'react'
// прелодер
// import { AuthenticationSplash } from './AuthenticationSplash'
// import { writeToken } from './token'
import {AuthQ_me, AuthQ} from './authQ'

export interface AuthContext {
    user:  null,
    // user: AuthQ_me | null,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     refetchUser: () => Promise<any>,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     authenticate: (token: string) => Promise<any>,
  }

export const AuthReactContext = createContext<AuthContext>({} as AuthContext)

export const AuthContext: React.FC = ({ children }) => {


    // распарс хуком  аполо
    // const authQ = useQuery<AuthQ>(AUTH_QUERY)
  
    // Нужно для корректной обработки useEffect
    // const userData = authQ.data?.me
    // const authQRefetch = authQ.refetch
  
    const authContext = useMemo(() => {
      return {
        user:  null,
        // user: userData ?? null,
        // refetchUser: () => authQRefetch(),
        // authenticate: (token: string) => {
        //   writeToken({ access_token: token })
        //   return authQRefetch()
        }
      },[])
    
    // }, [userData, authQRefetch])
  
    // if (authQ.loading && !authQ.data) {
    //   return <AuthenticationSplash/>
    // }
  
    return (

      <AuthReactContext.Provider value={authContext}>
        {children}
      </AuthReactContext.Provider>
    )
  }
  
  export function useAuthContext() {
    return useContext(AuthReactContext)
  }
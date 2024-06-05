import { lazy } from 'react'

export const HomePage = lazy(() => import('./Home'))
export const CandidatesPage = lazy(() => import('./Canditates'))
export const CreatePostPage = lazy(() => import('./CreatePost'))
export const PostPage = lazy(() => import('./Post'))
export const ProfilePage = lazy(() => import('./Profile'))
export const SignUpPage = lazy(() => import('./SignUp/SignUp'))
export const SignInPage = lazy(() => import('./SignIn'))
export const ErrorPage = lazy(() => import('./Error'))

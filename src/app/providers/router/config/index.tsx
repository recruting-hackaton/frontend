import { RouteProps } from 'react-router-dom'

import {
  CandidatesPage,
  CreatePostPage,
  CreateVacancyPage,
  ErrorPage,
  HomePage,
  PostPage,
  ProfilePage,
  SignInPage,
  SignUpPage,
  VacancyPage,
  VacancysPage,
} from '@/pages'

enum AppRoutes {
  HOME = 'home',
  CANDIDATES = 'candidates',
  CREATE_POST = 'createPost',
  PROFILE = 'profile',
  POST = 'post',
  VACANCY = 'vacancy',
  VACANCYS = 'vacancys',
  VACANCY_CREATE = 'createVacancy',
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',
  NOTFOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.CANDIDATES]: '/candidates',
  [AppRoutes.CREATE_POST]: '/create-post',
  [AppRoutes.POST]: '/post/:id',
  [AppRoutes.VACANCY_CREATE]: '/vacancy-create',
  [AppRoutes.VACANCY]: '/vacancy/:id',
  [AppRoutes.VACANCYS]: '/vacancys',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.SIGN_IN]: '/sign-in',
  [AppRoutes.SIGN_UP]: '/sign-up',
  [AppRoutes.NOTFOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.CANDIDATES]: {
    path: RoutePath.candidates,
    element: <CandidatesPage />,
  },
  [AppRoutes.CREATE_POST]: {
    path: RoutePath.createPost,
    element: <CreatePostPage />,
  },
  [AppRoutes.POST]: {
    path: RoutePath.post,
    element: <PostPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.VACANCY]: {
    path: RoutePath.vacancy,
    element: <VacancyPage />,
  },
  [AppRoutes.VACANCYS]: {
    path: RoutePath.vacancys,
    element: <VacancysPage />,
  },
  [AppRoutes.VACANCY_CREATE]: {
    path: RoutePath.createVacancy,
    element: <CreateVacancyPage />,
  },
  [AppRoutes.SIGN_IN]: {
    path: RoutePath.signIn,
    element: <SignInPage />,
  },
  [AppRoutes.SIGN_UP]: {
    path: RoutePath.signUp,
    element: <SignUpPage />,
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notFound,
    element: <ErrorPage />,
  },
}

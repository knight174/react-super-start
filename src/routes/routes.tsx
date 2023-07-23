import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { homeLoader } from './loaders/homeLoader';
import { Home } from '../pages/Home';
import { Posts } from '../pages/post/Posts';
import { Counter } from '../pages/counter/Counters';
import { UseRef } from '../pages/UseRef';
import { UseCallback } from '../pages/UseCallback';
import { SignInPage } from '../pages/SignInPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        loader: homeLoader,
        Component: Home,
      },
      {
        path: 'posts',
        Component: Posts,
      },
      {
        path: 'counters',
        Component: Counter,
      },
      {
        path: 'use-ref',
        Component: UseRef,
      },
      {
        path: 'use-callback',
        Component: UseCallback,
      },
      {
        path: 'sign_in',
        Component: SignInPage,
      },
      // {
      //   path: "todos",
      //   action: todosAction,
      //   loader: todosLoader,
      //   Component: TodosList,
      //   ErrorBoundary: TodosBoundary,
      //   children: [
      //     {
      //       path: ":id",
      //       loader: todoLoader,
      //       Component: Todo,
      //     },
      //   ],
      // },
      // {
      //   path: "deferred",
      //   loader: deferredLoader,
      //   Component: DeferredPage,
      // },
    ],
  },
]);

export default router;

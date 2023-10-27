/*
 * @Author: chenjianfeng chenjianfeng9335@gmail.com
 * @Date: 2023-09-17 11:55:54
 * @Description:
 */
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },

])

export default router

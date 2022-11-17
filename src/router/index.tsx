import { BrowserRouter, Route, Routes } from 'react-router-dom'

//type of router
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'

import { FormLogin, FormRegister, LoginOrRegister, OverView, TableCripto } from 'src/pages'
import { PathName } from 'src/const'



export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path={PathName.home.base} element={<PublicRouter><LoginOrRegister /></PublicRouter>}>
          <Route index element={<FormRegister />} />
          <Route path={PathName.home.login} element={<FormLogin />} />
        </Route>

        <Route path={PathName.home.table} element={<PrivateRouter><OverView /></PrivateRouter>} >
          <Route index element={<TableCripto />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

//Podemos usar menuItem para item no menu ou menuTree para um agrupador de itens de menu
export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashboard' icon='dashboard' />
    <MenuTree label='Cadastro' icon='edit'>
      <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />
    </MenuTree>
  </ul>
)
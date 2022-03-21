import { Link } from 'react-router-dom'
import { items } from '../data/sidebar-items'

const SideBar = () => {
  return (
    <div className="app-sidebar">
      <ul className="app-sidebar__list">
        {items.map((item, index) => (
          <li className="app-sidebar__item" style={{ backgroundColor: `${item.bgColor}` }} key={`${item.name.toLowerCase()}-${index}`}>
            <Link className="app-sidebar__link" to={item.url}>
              {item.name}
              <span className="app-sidebar__icon">{item.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar;
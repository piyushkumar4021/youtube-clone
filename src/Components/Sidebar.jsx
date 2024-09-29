import categories from '../data/categories';
import Icon from './Icon';

const Sidebar = ({ showSide, category, setCategory }) => {
  const getIconClass = (id) =>
    category === id ? 'box-content pb-1 border-b-2 border-red-500' : '';

  const getCategoryClass = (id) =>
    `mb-4 text-lg cursor-pointer select-none flex gap-x-3 items-center ${
      category === id ? 'text-neutral-700 font-bold' : 'text-neutral-600'
    }`;

  return (
    <div className='px-3 sm:px-6 py-5 shadow bg-white '>
      <ul>
        {categories.map((c) => (
          <li
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={getCategoryClass(c.id)}
          >
            <Icon className={getIconClass(c.id)} icon={c.icon} />
            {showSide && c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

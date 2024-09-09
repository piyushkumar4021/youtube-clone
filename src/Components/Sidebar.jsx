import categories from '../data/categories';
import Icon from './Icon';

const Sidebar = ({ sideLabels, category, setCategory }) => {
  const size = 18;
  const getIconClass = (id) =>
    category === id ? 'box-content pb-1 border-b-2 border-red-500' : '';
  const getCatClass = (id) =>
    category === id ? 'text-neutral-700 font-bold' : 'text-neutral-600';

  return (
    <div className='px-8 py-4 inline-block shadow fixed bg-white pt-20 h-screen'>
      <ul>
        {categories.map((c) => (
          <li
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`mb-4 text-lg cursor-pointer select-none flex gap-x-3 items-center ${getCatClass(
              c.id
            )}`}
          >
            <Icon className={getIconClass(c.id)} icon={c.icon} size={size} />
            {sideLabels && c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

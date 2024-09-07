import categories from '../data/categories';

const Sidebar = ({ sideLabels }) => {
  const iconProps = {
    size: 24,
    color: '#52525b',
  };

  return (
    <div className='px-8 py-4 inline-block shadow fixed bg-white pt-20 h-screen'>
      <ul>
        {categories.map((c) => (
          <li
            key={c.value}
            className='mb-4 text-lg cursor-pointer select-none flex gap-x-3 items-center'
          >
            {<c.icon {...iconProps} />} {sideLabels && c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

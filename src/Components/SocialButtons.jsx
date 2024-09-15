import {
  BsArrowDown,
  BsEnvelopeHeart,
  BsHandThumbsUp,
  BsShare,
} from 'react-icons/bs';
import Icon from './../Components/Icon';
import converter from '../Services/converter';
import Button from './Button';

const SocialButtons = ({ data }) => {
  const { statistics } = data;
  const socials = [
    {
      icon: BsHandThumbsUp,
      name: `${converter(statistics?.likeCount)} Likes`,
    },
    {
      icon: BsShare,
      name: 'Share',
    },
    {
      icon: BsArrowDown,
      name: 'Download',
    },
    {
      icon: BsEnvelopeHeart,
      name: 'Thanks',
    },
  ];

  return (
    <>
      {socials.map((s) => (
        <Button
          className='flex gap-x-2 items-center bg-neutral-200 hover:bg-neutral-300 transition-colors rounded-3xl px-4 py-2'
          key={s.name}
        >
          <Icon icon={s.icon} size={18} /> {s.name}
        </Button>
      ))}
    </>
  );
};

export default SocialButtons;

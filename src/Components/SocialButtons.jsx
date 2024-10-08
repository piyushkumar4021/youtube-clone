import Icon from './../Components/Icon';
import Button from './Button';
import videoSocials from '../data/videoSocials';
import converter from '../Services/converter';

const SocialButtons = ({ likeCount }) => {
  return (
    <>
      {videoSocials.map((s) => (
        <Button
          className='flex gap-x-1 sm:gap-x-2 items-center bg-stone-100 hover:bg-stone-200 transition-colors rounded-3xl px-2 py-1 sm:px-4 sm:py-2'
          key={s.icon}
        >
          <Icon icon={s.icon} size={16} /> {s.name || converter(likeCount)}
        </Button>
      ))}
    </>
  );
};

export default SocialButtons;

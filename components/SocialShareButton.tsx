import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  InstagramShareButton,
  InstagramIcon,
} from "react-share";

interface SocialShareButtonProps {
  title: string;
  url: string;
}

const SocialShareButton: React.FC<SocialShareButtonProps> = ({
  title,
  url,
}) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = () => {
    setIsSharing(true);
    setTimeout(() => {
      setIsSharing(false);
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="flex gap-4">
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag="#FitTrack"
        onShare={() => handleShare()}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        hashtag="#FitTrack"
        onShare={() => handleShare()}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <InstagramShareButton
        url={url}
        hashtag="#FitTrack"
        onShare={() => handleShare()}
      >
        <InstagramIcon size={32} round={true} />
      </InstagramShareButton>
      {isSharing && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white font-bold px-4 py-2 rounded-md">
          Sharing...
        </div>
      )}
    </div>
  );
};

export default SocialShareButton;
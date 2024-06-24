import Link from "next/link";

interface Props {
  Classname: string;
}

export const GitHubBadges = ({ Classname }: Props) => {
  return (
    <>
      <h4 className={`github-badges-title ${Classname}`}>
        GitHub Achievements
      </h4>
      <Link href="https://github.com/Lloydsibson?tab=achievements">
        <div className={`github-badges-container ${Classname}`}>
          <img
            className="github-badges-container__artic"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246256/arctic-code-vault-tp_hg9ayc.png"
            alt="Arctic Vault Achievement"
          />
          <img
            className="github-badges-container__sponsor"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246256/GitHubSponsorBadge-tp_rrp2tq.png"
            alt="Sponsorship Achievement"
          />
          <img
            className="github-badges-container__yolo"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246257/YOLO_Badge-tp_ld8kx2.png"
            alt="Yolo Achievement"
          />
          <img
            className="github-badges-container__pullshark"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246257/pull-shark-tp_yfmjck.png"
            alt="Pull Shark Achievement"
          />
        </div>
      </Link>
    </>
  );
};

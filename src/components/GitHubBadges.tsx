import Link from "next/link";

interface Props {
  Classname: string;
}

export const GitHubBadges = ({ Classname }: Props) => {
  return (
    <li className={Classname}>
      <h4 className="github-badges-title">GitHub Achievements</h4>
      <Link href="https://github.com/Lloydsibson?tab=achievements">
        <div className="github-badges-container">
          <img
            className="github-badges-container__artic"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246792/arctic-code-vault-contributor-default-tp_ukmhwl.png"
            alt="Arctic Vault Achievement"
          />
          <img
            className="github-badges-container__sponsor"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246793/GitHubSponsorBadge-tp_vch09x.png"
            alt="Sponsorship Achievement"
          />
          <img
            className="github-badges-container__yolo"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246794/YOLO_Badge-tp_wxgtro.png"
            alt="Yolo Achievement"
          />
          <img
            className="github-badges-container__pullshark"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246793/pull-shark-default-tp_rhga48.png"
            alt="Pull Shark Achievement"
          />
        </div>
      </Link>
    </li>
  );
};

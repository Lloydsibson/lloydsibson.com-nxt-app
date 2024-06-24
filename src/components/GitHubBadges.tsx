import Link from "next/link";

interface Props {
  Classname: string;
}

export const GitHubBadges = ({ Classname }: Props) => {
  return (
    <Link href="https://github.com/Lloydsibson?tab=achievements">
      <div className={`github-badges-container ${Classname}`}>
        <img
          className="github-badges-container__artic"
          src="https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png"
          alt="Arctic Vault Achievement"
        />
        <img
          className="github-badges-container__sponsor"
          src="https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/GitHub-Sponsor/PNG/GitHubSponsorBadge.png"
          alt="Sponsorship Achievement"
        />

        <img
          className="github-badges-container__quickdraw"
          src="https://raw.githubusercontent.com/drknzz/GitHub-Achievements/main/Media/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone1.png"
          alt="Quickdraw Achievement"
        />

        <img
          className="github-badges-container__yolo"
          src="https://github.com/drknzz/GitHub-Achievements/blob/main/Media/Badges/YOLO/PNG/YOLO_Badge.png?raw=true"
          alt="Yolo Achievement"
        />
      </div>
    </Link>
  );
};

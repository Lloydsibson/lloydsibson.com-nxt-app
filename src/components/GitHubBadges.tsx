import Link from "next/link";

interface Props {
  Classname: string;
}

export const GitHubBadges = ({ Classname }: Props) => {
  return (
    <>
      <h4 className="github-badges-title">GitHub Achievements</h4>
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
            className="github-badges-container__yolo"
            src="https://github.com/drknzz/GitHub-Achievements/blob/main/Media/Badges/YOLO/PNG/YOLO_Badge.png?raw=true"
            alt="Yolo Achievement"
          />
          <img
            className="github-badges-container__pullshark"
            src="https://raw.githubusercontent.com/Schweinepriester/github-profile-achievements/main/images/pull-shark-default.png"
            alt="Pull Shark Achievement"
          />
        </div>
      </Link>
    </>
  );
};

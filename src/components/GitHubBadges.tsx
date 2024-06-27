import Link from "next/link";
import { AdvancedLazyLoad } from "./AdvancedLazyLoad";

interface Props {
  Classname: string;
}

export const GitHubBadges = ({ Classname }: Props) => {
  return (
    <li className={Classname}>
      <h4 className="github-badges-title">GitHub Achievements</h4>
      <Link href="https://github.com/Lloydsibson?tab=achievements">
        <div className="github-badges-container">
          {/* <img
            className="github-badges-container__artic"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246792/arctic-code-vault-contributor-default-tp_ukmhwl.png"
            alt="Arctic Vault Achievement"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1719246792/arctic-code-vault-contributor-default-tp_ukmhwl"
            imgALT="Arctic Vault Achievement"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:100,f_auto,q_auto/v1719246792/arctic-code-vault-contributor-default-tp_ukmhwl"
            imgIdName={undefined}
            elemName="githubbadges"
            imgTransparent={true}
            imgWidth={Classname == "ghb-desktop" ? "30px" : "50px"}
            imgHeight={Classname == "ghb-desktop" ? "30px" : "45px"}
            imgClassName={undefined}
            containerClassName={"github-badges-container__artic"}
          />
          {/* <img
            className="github-badges-container__sponsor"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246793/GitHubSponsorBadge-tp_vch09x.png"
            alt="Sponsorship Achievement"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1719246793/GitHubSponsorBadge-tp_vch09x"
            imgALT="Sponsorship Achievement"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:100,f_auto,q_auto/v1719246793/GitHubSponsorBadge-tp_vch09x"
            imgIdName={undefined}
            elemName="githubbadges"
            imgTransparent={true}
            imgWidth={Classname == "ghb-desktop" ? "30px" : "50px"}
            imgHeight={Classname == "ghb-desktop" ? "30px" : "45px"}
            imgClassName={undefined}
            containerClassName="github-badges-container__sponsor"
          />
          {/* <img
            className="github-badges-container__yolo"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246794/YOLO_Badge-tp_wxgtro.png"
            alt="Yolo Achievement"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1719246794/YOLO_Badge-tp_wxgtro"
            imgALT="Yolo Achievement"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:100,f_auto,q_auto/v1719246794/YOLO_Badge-tp_wxgtro"
            imgIdName={undefined}
            elemName="githubbadges"
            imgTransparent={true}
            imgWidth={Classname == "ghb-desktop" ? "30px" : "50px"}
            imgHeight={Classname == "ghb-desktop" ? "30px" : "45px"}
            imgClassName={undefined}
            containerClassName="github-badges-container__yolo"
          />
          {/* <img
            className="github-badges-container__pullshark"
            src="https://res.cloudinary.com/cloudinary-ls-images/image/upload/v1719246793/pull-shark-default-tp_rhga48.png"
            alt="Pull Shark Achievement"
          /> */}
          <AdvancedLazyLoad
            imgURL="https://res.cloudinary.com/cloudinary-ls-images/image/upload/f_auto,q_auto/v1719246793/pull-shark-default-tp_rhga48"
            imgALT="Yolo Achievement"
            backgroundImg="https://res.cloudinary.com/cloudinary-ls-images/image/upload/w_20/e_blur:100,f_auto,q_auto/v1719246793/pull-shark-default-tp_rhga48"
            imgIdName={undefined}
            elemName="githubbadges"
            imgTransparent={true}
            imgWidth={Classname == "ghb-desktop" ? "30px" : "50px"}
            imgHeight={Classname == "ghb-desktop" ? "30px" : "45px"}
            imgClassName={undefined}
            containerClassName="github-badges-container__pullshark"
          />
        </div>
      </Link>
    </li>
  );
};

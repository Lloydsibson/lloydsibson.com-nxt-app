import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  actionName: string;
}

export const CiCd = ({ actionName }: Props) => {
  return (
    <div className="cicd-actions-container__action">
      <FontAwesomeIcon icon={faCircleCheck} />
      <p className="cicd-action-name">{actionName}</p>
    </div>
  );
};

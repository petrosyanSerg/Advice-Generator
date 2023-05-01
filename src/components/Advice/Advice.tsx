import { useEffect, useState } from "react";
import { getAdviceAsync } from "../../features/adviceSlice/adviceSlice";
import { adviceSelect } from "../../features/adviceSlice/adviceSelectors";
import { FaDiceFive } from "react-icons/fa";

import {
  useAddDispatch,
  useAddSelctior,
} from "../../features/useReduxType/hookType";

import "./Advice.scss";

export default function Advice() {
  const [copied, setCopied] = useState<boolean>(false);
  const advice = useAddSelctior(adviceSelect);
  const dispatch = useAddDispatch();

  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleClick = () => {
    dispatch(getAdviceAsync());
    setCopied(false);
  };

  useEffect(() => {
    dispatch(getAdviceAsync());
  }, []);

  return (
    <article className="section">
      <h5 className="section__id">ADVICE #{advice && advice.id}</h5>
      <p
        className={`section__text ${copied && "copied"}`}
        onClick={() => copyToClipboard(advice.advice)}
      >
        <q className="section__quotation">{advice && advice.advice}</q>
      </p>
      <div className="section__vector"></div>
      <div onClick={handleClick} className="section__dice">
        <FaDiceFive className="section__dice_icon" />
      </div>
    </article>
  );
}

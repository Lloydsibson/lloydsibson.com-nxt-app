export const ReadMoreBtn = (props: any) => {
  const readMoreHandler = (e: any) => {
    e.currentTarget.classList.add("-hide");
    const prevSiblingElem = e.currentTarget.previousSibling;
    if (prevSiblingElem) {
      prevSiblingElem.classList.add("-show");
      const elementHeight = prevSiblingElem.scrollHeight;
      prevSiblingElem.style.maxHeight = `${elementHeight}px`;
    } else {
      // DO NOTHING
    }
  };
  return (
    <div
      className="read-more-btn"
      data-testid="rm-button"
      onClick={readMoreHandler}
    >
      <div className="read-more-btn__shadow"></div>
      <p data-testid="rm-button-text">{props.text}</p>
    </div>
  );
};

import arrowDownIcon from "../assets/images/icon-arrow-down.svg";

export default function FontPicker() {
  return (
    <>
      <button className="flex flex-row items-center gap-4">
        <span className="text-sm font-bold">Sans Serif</span>
        <span>
          <img src={arrowDownIcon} />
        </span>
      </button>
    </>
  );
}

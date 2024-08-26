import newWindowIcon from "../assets/images/icon-new-window.svg";

export default function Source({ url }) {
  return (
    <div className="text-sm">
      <div className="h-px bg-outline dark:bg-outline-dark mb-6"></div>
      <h5 className="mb-2 text-on-surface-variant underline decoration-wavy">
        Source
      </h5>
      <a className="flex flex-row items-center gap-2" href={url}>
        <span className="break-all">{url}</span>
        <img
          className="w-3 h-3"
          src={newWindowIcon}
          alt="icon depicting new window"
        />
      </a>
    </div>
  );
}

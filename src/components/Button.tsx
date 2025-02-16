interface IButton {
  onClick: () => void;
  text: string | React.JSX.Element;
}

export default function Button({ button }: { button: IButton }) {
  return (
    <button
      className="cursor-pointer capitalize text-base text-[#F1E4EE] py-2 px-4 bg-[#BC546B] rounded-[10px]"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        button.onClick();
      }}
    >
        {button.text}
    </button>
  );
}

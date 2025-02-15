interface IButton {
  onClick: () => void;
  text: string;
}

export default function Button({ button }: { button: IButton }) {
  return (
    <button
      className="cursor-pointer button-hover capitalize text-base text-[#F1E4EE] p-2 bg-[#BC546B] rounded-[10px]"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        button.onClick();
      }}
    >
        {button.text}
    </button>
  );
}

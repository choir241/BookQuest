function grabMultipleSelectValues(): string[] {
  const genre = document.querySelector("#genre");
  const result = [];
  const options = genre && genre.options;
  let opt;

  for (let i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value);
    }
  }
  return result;
}

interface ISelect {
  onChange: (e: string[]) => void;
  options: React.JSX.Element[];
  id: string;
  multiple: boolean;
}

export default function Select({ select }: { select: ISelect }) {
  return (
    <select
      multiple={select.multiple}
      className="cursor-pointer rounded-[10px] border-2 p-2 border-[#BC546B]"
      onChange={() => select.onChange(grabMultipleSelectValues())}
      id={select.id}
    >
      {select.options}
    </select>
  );
}

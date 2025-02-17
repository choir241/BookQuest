interface ISelect{
    onChange: (e) => void;
    options: React.JSX.Element[];
    id: string;
    multiple: boolean;
}

export default function Select({select}:{select: ISelect}){
    return(
        <select
        multiple = {select.multiple}
        className="cursor-pointer rounded-[10px] border-2 p-2 border-[#BC546B]"
        onChange={(e)=>select.onChange(e.target.value)} id={select.id}>
            {select.options}
        </select>
    )
}
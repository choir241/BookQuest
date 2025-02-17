interface IInput{
type: string;
placeholder: string;
name: string;
onChange: (e: string) => void;
value?: string;
id: string;
}

export default function Input({input}:{input: IInput}){
    return(
        <input
            className="cursor-pointer rounded-[10px] border-2 p-2 border-[#BC546B]"
            id = {input.id}
            value = {input.value}
            type = {input.type}
            name = {input.name}
            placeholder = {input.placeholder}
            onChange = {(e)=> input.onChange(e.target.value)}
        />
    )
}
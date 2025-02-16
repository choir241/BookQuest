interface Label{
    htmlFor: string;
    text: string;
}

export default function Label({label}:{label: Label}){
    return(
        <label htmlFor = {label.htmlFor}>
            {label.text}
        </label>
    )
}
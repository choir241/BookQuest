interface Label{
    htmlFor: string;
    text: string;
    className?: string;
}

export default function Label({label}:{label: Label}){
    return(
        <label className = {`${label.className}`} htmlFor = {label.htmlFor}>
            {label.text}
        </label>
    )
}
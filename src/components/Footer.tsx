export default function Footer(){
    const currentDate = new Date();

    return(
        <footer className="pt-[2rem]">
            <span>&copy; choir241 BookQuest {currentDate.getFullYear()}</span>
        </footer>
    )
}
const genres = [
    "Adventure", "Biography/Autobiography/Memoir", "Children's Fiction", "Classics", 
    "Comedy/Humor", "Crime/Thriller", "Fantasy", "Historical Fiction", "Horror", 
    "Literary Fiction", "Magical Realism", "Mystery", "Non-fiction", "Philosophical Fiction", 
    "Poetry", "Romance", "Science Fiction", "Short Stories", "Speculative Fiction", 
    "Spy/Espionage", "Thriller", "War/Military", "Western", "Dystopian", "Urban Fantasy", 
    "Contemporary Fiction", "Young Adult (YA)", "Graphic Novels/Comics", "Cookbooks", 
    "Self-Help", "Health/Fitness", "Travel", "True Crime", "Religious/Spiritual", 
    "Political Fiction", "Social Issues Fiction", "LGBTQ+ Fiction", "Mythology/Folklore", 
    "Literary Fantasy", "Business/Finance", "Science/Technology", "True Adventure", 
    "Historical Romance", "Coming of Age", "Satire", "Magical Fantasy", 
    "Fairy Tale Retellings", "Post-apocalyptic Fiction", "Cyberpunk", "Steampunk", 
    "Environmental Fiction"
];

export const genreOptions = genres.map((genre: string)=>{
    return(
        <option key = {genre} value={genre}>
            {genre}
        </option>
    )
});
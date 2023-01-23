type Music = {
    favorite?: boolean,
    title: string,
    artist: string, 
    genre: string,
    album: string
}

type Favorite = {
    isFavorite: boolean
}

export {
    Music,
    Favorite
}
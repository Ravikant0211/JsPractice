class Movie {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre;
    }

    get_title() {
        return this.title;
    }

    set_title(title) {
        this.title = title;
    }

    get_year = function() {
        return this.year;
    }

    set_year(year) {
        this.year = year;
    }

    get_genre() {
        return this.genre;
    }

    set_genre(genre) {
        this.genre = genre;
    } 

    print_details() {
        console.log('Title: ', this.get_title());
        console.log('Year: ', this.get_year());
        console.log('Genre: ', this.get_genre());
    }
}

const movie = new Movie('The Lion King', 1994, 'Adventure');
movie.print_details();

console.log("----");
movie.set_title('Forest Gump');
console.log('New Title: ', movie.get_title());

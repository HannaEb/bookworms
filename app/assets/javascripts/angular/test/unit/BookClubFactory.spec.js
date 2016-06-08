describe("BookClubFactory", function(){
  beforeEach(module("bookWormApp"));

  var factory;
  var bookClub;

  beforeEach(inject(function(BookClubFactory){
    factory = new BookClubFactory("Name", "Genre", "Location", "Date", "Time", "Description", "Book");
    bookClub = { name: "Name", genre: "Genre", location: "Location", date: "Date", time: "Time", description: "Description", book: "Book" };
  }));

  it("creates a bookClub object with a name", function(){
    expect(factory.name).toEqual(bookClub.name);
  });

  it("creates a bookClub object with a genre", function(){
    expect(factory.genre).toEqual(bookClub.genre);
  });

  it("creates a bookClub object with a location", function(){
    expect(factory.location).toEqual(bookClub.location);
  });

  it("creates a bookClub object with a date", function(){
    expect(factory.date).toEqual(bookClub.date);
  });

  it("creates a bookClub object with a time", function(){
    expect(factory.time).toEqual(bookClub.time);
  });

  it("creates a bookClub object with a description", function(){
    expect(factory.description).toEqual(bookClub.description);
  });

  it("creates a bookClub object with a book", function(){
    expect(factory.book).toEqual(bookClub.book);
  });


});

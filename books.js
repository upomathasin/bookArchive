const handleSearch = () => {
  const inputValue = document.getElementById("searchInput").value;
  const url = `https://openlibrary.org/search.json?q=${inputValue}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayBook(data));
};

const displayBook = (data) => {
  console.log(data.docs);

  const books = data.docs;
  const booksContainer = document.getElementById("books");
  const result = document.getElementById("result");
  books.length === 0
    ? (result.innerHTML = "No Results Found !!")
    : (result.innerHTML = `There are ${books.length} books found !`);
  books.forEach((book) => {
    const div = document.createElement("div");
    div.className = "card col-md-4  ";
    let imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg `;
    console.log(imgUrl);
    div.innerHTML = `  
    <img src=${imgUrl} class="card-img-top" alt="..." style='width:100%; height:300px'>
  <div class="card-body">
    <h5 class="card-title">Book Name: ${book.title}</h5>
    <h6>First Published in ${book.first_publish_year}</h6>
    <p>Author Name ${book.author_name ? book.author_name : ""}</p>


  </div>
  `;

    booksContainer.appendChild(div);
  });
};

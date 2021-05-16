import React, {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {bookType} from "./type/book";

function App() {
		const [inputValue, setInputValue] = useState("")

		const [books, setBooks] = useState<Array<bookType>>([])

		const getBooks = async (value: string) => {
				const {data} = await axios.get(`https://openlibrary.org/search.json?title=${value}`)
				return data.docs
		}

		useEffect(() => {

				const timeout = setTimeout(async () => {
						const data = await getBooks(inputValue)
						setBooks(data)
				}, 1000)

				return () => {
						clearTimeout(timeout)
				}
		}, [inputValue])

		console.log(books)

		const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
				setInputValue(e.currentTarget.value)
		}

		return (
				<div className="App">
						<div style={{marginTop: "10px"}}>
								<input type="text" value={inputValue} onChange={handleOnChange}/>
								<button style={{marginLeft: "5px"}}>search</button>
						</div>
						<div style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								flexWrap: "wrap",
								marginTop: "10px"
						}}>
								{books.map(book => (
												<div key={book.key} style={{
														display: "flex",
														flexDirection: "column",
														alignItems: "center",
														justifyContent: "space-between",
														width: "33.3333%",
														outline: "1px solid black"
												}}>
														{book.cover_i ? <div style={{
																width: "100%",
																height: "280px",
																marginTop: "10px",
																background: `url(https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg) center / contain no-repeat`
														}}></div> : <div style={{
																width: "100%",
																height: "280px",
																marginTop: "10px",
																backgroundColor: "black",
																color: "white"
														}}>No Image</div>}
														<h3>{book.title}</h3>
														<p>author: {book.author_name}</p>
												</div>
										)
								)}
						</div>
				</div>
		);
}

export default App;

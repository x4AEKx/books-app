import React, {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {bookType} from "./type/book";

function App() {
		const [inputValue, setInputValue] = useState("")
		const [books, setBooks] = useState<Array<bookType>>([])

		const getBooks = async (value: string) => {
				const {data} = await axios.get(`https://openlibrary.org/search.json?title=${value}`)
				setBooks(data.docs)
		}

		useEffect(() => {
				setTimeout(async () => {
						getBooks(inputValue)
				}, 1000)

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
												<div style={{
														display: "flex",
														flexDirection: "column",
														alignItems: "center",
														justifyContent: "space-between",
														width: "33.3333%",
														outline: "1px solid black"
												}}>
														<div style={{
																width: "100px",
																height: "100px",
																backgroundColor: "black",
																marginTop: "10px"
														}}></div>
														<h3>{book.title}</h3>
														<p>author: {book.author_name}</p>
												</div>
										)
								)}
						</div>
						{/*<div style={{*/}
						{/*		display: "flex",*/}
						{/*		justifyContent: "space-around",*/}
						{/*		alignItems: "center",*/}
						{/*		flexWrap: "wrap",*/}
						{/*		marginTop: "10px"*/}
						{/*}}>*/}
						{/*		<div style={{*/}
						{/*				display: "flex",*/}
						{/*				flexDirection: "column",*/}
						{/*				alignItems: "center",*/}
						{/*				width: "33.3333%",*/}
						{/*				outline: "1px solid black"*/}
						{/*		}}>*/}
						{/*				<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>*/}
						{/*				<h3>book name</h3>*/}
						{/*				<p>book`s author</p>*/}
						{/*		</div>*/}
						{/*		<div style={{*/}
						{/*				display: "flex",*/}
						{/*				flexDirection: "column",*/}
						{/*				alignItems: "center",*/}
						{/*				width: "33.3333%",*/}
						{/*				outline: "1px solid black"*/}
						{/*		}}>*/}
						{/*				<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>*/}
						{/*				<h3>book name</h3>*/}
						{/*				<p>book`s author</p>*/}
						{/*		</div>*/}
						{/*		<div style={{*/}
						{/*				display: "flex",*/}
						{/*				flexDirection: "column",*/}
						{/*				alignItems: "center",*/}
						{/*				width: "33.3333%",*/}
						{/*				outline: "1px solid black"*/}
						{/*		}}>*/}
						{/*				<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>*/}
						{/*				<h3>book name</h3>*/}
						{/*				<p>book`s author</p>*/}
						{/*		</div>*/}
						{/*		<div style={{*/}
						{/*				display: "flex",*/}
						{/*				flexDirection: "column",*/}
						{/*				alignItems: "center",*/}
						{/*				width: "33.3333%",*/}
						{/*				outline: "1px solid black"*/}
						{/*		}}>*/}
						{/*				<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>*/}
						{/*				<h3>book name</h3>*/}
						{/*				<p>book`s author</p>*/}
						{/*		</div>*/}
						{/*		<div style={{*/}
						{/*				display: "flex",*/}
						{/*				flexDirection: "column",*/}
						{/*				alignItems: "center",*/}
						{/*				width: "33.3333%",*/}
						{/*				outline: "1px solid black"*/}
						{/*		}}>*/}
						{/*				<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>*/}
						{/*				<h3>book name</h3>*/}
						{/*				<p>book`s author</p>*/}
						{/*		</div>*/}
						{/*		<div style={{*/}
						{/*				display: "flex",*/}
						{/*				flexDirection: "column",*/}
						{/*				alignItems: "center",*/}
						{/*				width: "33.3333%",*/}
						{/*				outline: "1px solid black"*/}
						{/*		}}>*/}
						{/*				<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>*/}
						{/*				<h3>book name</h3>*/}
						{/*				<p>book`s author</p>*/}
						{/*		</div>*/}
						{/*		<div style={{*/}
						{/*				display: "flex",*/}
						{/*				flexDirection: "column",*/}
						{/*				alignItems: "center",*/}
						{/*				width: "33.3333%",*/}
						{/*				outline: "1px solid black"*/}
						{/*		}}>*/}
						{/*				<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>*/}
						{/*				<h3>book name</h3>*/}
						{/*				<p>book`s author</p>*/}
						{/*		</div>*/}
						{/*</div>*/}


				</div>
		);
}

export default App;

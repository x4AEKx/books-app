import React, {ChangeEvent, useState} from "react";
import "./App.css";

function App() {
		const [inputValue, setInputValue] = useState("")

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
								<div style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										width: "33.3333%",
										outline: "1px solid black"
								}}>
										<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>
										<h3>book name</h3>
										<p>book`s author</p>
								</div>
								<div style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										width: "33.3333%",
										outline: "1px solid black"
								}}>
										<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>
										<h3>book name</h3>
										<p>book`s author</p>
								</div>
								<div style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										width: "33.3333%",
										outline: "1px solid black"
								}}>
										<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>
										<h3>book name</h3>
										<p>book`s author</p>
								</div>
								<div style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										width: "33.3333%",
										outline: "1px solid black"
								}}>
										<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>
										<h3>book name</h3>
										<p>book`s author</p>
								</div>
								<div style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										width: "33.3333%",
										outline: "1px solid black"
								}}>
										<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>
										<h3>book name</h3>
										<p>book`s author</p>
								</div>
								<div style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										width: "33.3333%",
										outline: "1px solid black"
								}}>
										<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>
										<h3>book name</h3>
										<p>book`s author</p>
								</div>
								<div style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										width: "33.3333%",
										outline: "1px solid black"
								}}>
										<div style={{width: "100px", height: "100px", backgroundColor: "black", marginTop: "10px"}}></div>
										<h3>book name</h3>
										<p>book`s author</p>
								</div>
						</div>


				</div>
		);
}

export default App;

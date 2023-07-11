function App() {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>weeeee</li>
        </ul>
        <nav>
          <p>Created by Nick Grundberg</p>
        </nav>
      </section>
      <section className="main">
        <h1>NickGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit" onClick={getMessages}>
              ➢
            </div>
          </div>
          <p className="info">somethin about chat gpt</p>
        </div>
      </section>
    </div>
  );
}

export default App;

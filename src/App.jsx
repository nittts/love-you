import { useState } from "react";

import "./App.css";

const messages = [
  "não",
  "certeza?",
  "absoluta???",
  "não faz isso comigo",
  "aceita pfvr :c",
  "se aceitar eu te compro um monster",
  "E UM DIPZ",
  "DOIX DIPZZZZ",
  "PUFAAAAAAA",
  "aceita ;C",
];

function App() {
  const [ratio, setRatio] = useState(1);
  const [message, setMessage] = useState(messages[0]);
  const [accepted, setAccepted] = useState(false);

  const increaseRatio = () => {
    setRatio(ratio + 1);
    if (ratio + 1 <= messages.length - 1) {
      setMessage(messages[ratio + 1]);
    }
  };

  return accepted ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2vh",
        color: "#2b2b2b",
      }}
    >
      <img src="https://c.tenor.com/mYX-Aq64HK8AAAAC/tenor.gif" alt="" style={{ height: "40vh", width: "40vh" }} />
      <div>
        <h4 style={{ margin: 0, padding: 0 }}>BICADU POR ACEITAR :3</h4>
        <p>toma, pá ti 💍</p>
        <p>tinhamu 🧡💜</p>
        <img src="https://c.tenor.com/auwW9Vb5uK0AAAAC/tenor.gif" alt="" style={{ height: "20vh", width: "20vh" }} />
      </div>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "2vh",
      }}
    >
      <img
        src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
        alt=""
        style={{ height: "40vh", width: "40vh" }}
      />
      <div
        style={{
          diplay: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2b2b2b",
        }}
      >
        <h4 style={{ margin: 0, padding: 0 }}>QUIZ ULTRA DIFICIL PARA MINHA NAMORADA:</h4>
        <p>Pergunta 1: Aceita casar comigo?</p>
        <button
          style={{
            transform: `scale(${ratio})`,
            marginTop: `${ratio * 2}vh`,
            marginRight: `${ratio * 2}vw`,
          }}
          onClick={() => setAccepted(!accepted)}
          className="button-3"
        >
          Sim
        </button>
        <button className="button-4" style={{ marginLeft: "2vw" }} onClick={() => increaseRatio()}>
          {message}
        </button>
      </div>
    </div>
  );
}

export default App;


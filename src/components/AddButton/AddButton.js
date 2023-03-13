export default function AddButton({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{
          color: "white",
          fontWeight: "bold",
          background: "#D94D0D",
          borderRadius: "5px",
          border:"none",
          padding:"0.1rem 0.5rem",
          display:"flex",
          alignItems:"center"
        }}
      >
        <span className="fs-4 mb-0 me-2">+</span>{ text}
      </button>
    </>
  );
}

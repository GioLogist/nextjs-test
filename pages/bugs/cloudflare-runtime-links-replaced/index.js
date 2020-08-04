function Bug() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      This{" "}
      <a href="https://google.com">
        <u>Google link</u>
      </a>
      gets replaced with this
      <a href={`https://codersnippets.com`} target="_blank">
        <u>CoderSnippets link</u>
      </a>
      <p>Now, both of these become CoderSnippet links</p>
      <a href="https://google.com">
        <u>Google link</u>
      </a>
      <a href="https://codersnippets.com">
        <u>CoderSnippets link</u>
      </a>
    </div>
  );
}

export default Bug;

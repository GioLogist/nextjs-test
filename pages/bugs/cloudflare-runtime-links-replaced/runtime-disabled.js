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
      <b>does not get</b> replaced with this
      <a href={`https://codersnippets.com`} target="_blank">
        <u>CoderSnippets link</u>
      </a>
      <p>
        Now, <b>none of these</b> get replaced.
      </p>
      <a href="https://google.com">
        <u>Google link</u>
      </a>
      <a href="https://codersnippets.com">
        <u>CoderSnippets link</u>
      </a>
      <p>
        Note: The only difference here, is that we set <b>unstable_runtimeJS</b>{" "}
        to <b>false</b>
      </p>
    </div>
  );
}

export const config = {
  unstable_runtimeJS: false,
};

export default Bug;

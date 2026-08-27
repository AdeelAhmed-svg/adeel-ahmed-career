const GITHUB_URL = 'https://github.com/AdeelAhmed-svg'
const LINKEDIN_URL = 'https://www.linkedin.com/in/adeelahmed-'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto mb-6 flex max-w-6xl justify-center px-5 sm:justify-start sm:px-8">
  <a
    href="https://internship.flyrank.ai/verify?id=FR-D1-62CAE-49846&first_name=Adeel"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Verify Adeel Ahmed's FlyRank AI Internship credential FR-D1-62CAE-49846"
    style={{
      boxSizing: "border-box",
      margin: "0",
      padding: "6px 14px 6px 11px",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "#051F21",
      textDecoration: "none",
      fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
      fontStyle: "normal",
      lineHeight: "1.25",
      textTransform: "none",
      float: "none",
      WebkitFontSmoothing: "antialiased",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      borderRadius: "9999px",
      verticalAlign: "middle",
      whiteSpace: "nowrap"
    }}
  >
    <svg
      width="11"
      height="15"
      viewBox="26 18 44 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block", flex: "none", opacity: "1", transform: "none", maxWidth: "none" }}
    ><path d="M28.2354 74.2202V67.9039C29.6419 68.4369 31.3724 68.7055 33.4311 68.7055C35.3235 68.7055 36.8153 68.2396 37.8979 67.3079C38.9805 66.3762 39.9566 64.8695 40.8218 62.792L42.6887 58.3139L29.8976 29.2879C35.0038 29.2879 39.6028 32.3307 41.5294 36.9893L47.0746 50.3985L56.0126 28.6038C57.9221 23.9452 62.5168 20.894 67.6187 20.894L50.0795 63.5936C48.4556 67.5933 46.5205 70.5102 44.2743 72.3484C42.0281 74.1867 39.1169 75.1058 35.5451 75.1058C32.6212 75.1058 30.1875 74.812 28.2354 74.2244V74.2202Z" fill="#54E399" /></svg>
    <span style={{ margin: "0", padding: "0", border: "0", background: "none", color: "#FFFFFF", fontWeight: "600", fontStyle: "normal", letterSpacing: "normal", textTransform: "none", textDecoration: "none", whiteSpace: "normal", float: "none", fontSize: "13px" }}>FlyRank verified</span>
    <span style={{ margin: "0", padding: "0", border: "0", background: "rgba(255,255,255,0.1)", color: "inherit", fontWeight: "400", fontStyle: "normal", letterSpacing: "normal", textTransform: "none", textDecoration: "none", whiteSpace: "normal", float: "none", width: "1px", height: "14px", flex: "none" }}></span>
    <span style={{ margin: "0", padding: "0", border: "0", background: "none", color: "rgba(255,255,255,0.55)", fontWeight: "400", fontStyle: "normal", letterSpacing: "normal", textTransform: "none", textDecoration: "none", whiteSpace: "normal", float: "none", fontFamily: "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace", fontSize: "11px" }}>FR-D1-62CAE-49846</span>
  </a>
</div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-sm text-neutral-500 sm:flex-row sm:justify-between sm:px-8">
        <p>Adeel Ahmed · AI Marketing and Data Analytics</p>
        <div className="flex gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:techmusic019@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

/* Console — App orchestrator (ties screens together) */
function ConsolePlaceholder({ title }) {
  const { Icon } = window.OverModernDesignSystem_22ac94;
  return (
    <div className="cx-content">
      <div className="cx-pagehead"><div><h1>{title}</h1><p>This surface is part of the kit's navigation shell.</p></div></div>
      <div style={{ display: "grid", placeItems: "center", height: 320, color: "var(--text-disabled)", gap: 14, textAlign: "center" }}>
        <Icon name="layers" size={40} style={{ color: "var(--ob-600)" }} />
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>{title} · placeholder</div>
      </div>
    </div>
  );
}

function App() {
  const [authed, setAuthed] = React.useState(false);
  const [nav, setNav] = React.useState("overview");
  const [env, setEnv] = React.useState("prod");
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  const labels = {
    overview: "Overview", deployments: "Deployments", observability: "Observability",
    databases: "Databases", edge: "Edge network", members: "Members", settings: "Settings",
  };
  let screen;
  if (nav === "overview") screen = <OverviewScreen />;
  else if (nav === "deployments") screen = <DeploymentsScreen />;
  else screen = <ConsolePlaceholder title={labels[nav]} />;

  return (
    <div className="cx-app">
      <Sidebar active={nav} onNav={setNav} />
      <div className="cx-main">
        <Topbar crumb={labels[nav]} env={env} onEnv={setEnv} theme={theme} onTheme={toggleTheme} />
        {screen}
      </div>
    </div>
  );
}
window.ConsoleApp = App;

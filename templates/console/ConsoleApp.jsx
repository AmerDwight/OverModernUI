/* Console template — full app shell in one importable module.
   Mounted by Console.dc.html via <x-import component="ConsoleApp" from="./ConsoleApp.jsx">.
   Reads primitives from the design-system bundle (loaded by ds-base.js). */

/* ---------- Sidebar ---------- */
function Sidebar({ active, onNav }) {
  const { Icon, Avatar } = window.OverModernDesignSystem_22ac94;
  const main = [
    { id: "overview", icon: "layout-dashboard", label: "Overview" },
    { id: "deployments", icon: "rocket", label: "Deployments", count: "12" },
    { id: "observability", icon: "activity", label: "Observability" },
    { id: "databases", icon: "database", label: "Databases" },
    { id: "edge", icon: "globe", label: "Edge network" },
  ];
  const sys = [
    { id: "members", icon: "users", label: "Members" },
    { id: "settings", icon: "settings", label: "Settings" },
  ];
  const Item = (it) => (
    <div
      key={it.id}
      className={"cx-nav" + (active === it.id ? " cx-nav--active" : "")}
      onClick={() => onNav && onNav(it.id)}
    >
      <Icon name={it.icon} size={18} />
      <span>{it.label}</span>
      {it.count && <span className="cx-nav__count">{it.count}</span>}
    </div>
  );
  return (
    <aside className="cx-side">
      <div className="cx-side__brand">
        <img src="../../assets/logo-wordmark.svg" alt="OverModern" />
      </div>
      <div className="cx-ws">
        <Avatar name="Northwind Labs" accent size="sm" />
        <div style={{ lineHeight: 1.25 }}>
          <div className="cx-ws__name">Northwind Labs</div>
          <div className="cx-ws__plan">ENTERPRISE</div>
        </div>
        <Icon name="chevrons-up-down" size={15} style={{ marginLeft: "auto", color: "var(--text-tertiary)" }} />
      </div>
      <div className="cx-navlabel">Platform</div>
      {main.map(Item)}
      <div className="cx-navlabel">Organization</div>
      {sys.map(Item)}
      <div className="cx-side__foot">
        <Avatar name="Ada Mercer" status="online" size="md" />
        <div style={{ lineHeight: 1.3 }}>
          <div className="nm">Ada Mercer</div>
          <div className="em">ada@northwind.io</div>
        </div>
        <Icon name="log-out" size={16} style={{ marginLeft: "auto", color: "var(--text-tertiary)" }} />
      </div>
    </aside>
  );
}

/* ---------- Topbar ---------- */
function Topbar({ crumb, env, onEnv, theme, onTheme }) {
  const { Input, IconButton, Icon, Tabs } = window.OverModernDesignSystem_22ac94;
  return (
    <header className="cx-top">
      <div className="cx-top__crumb">northwind&nbsp;/&nbsp;<b>{crumb}</b></div>
      <div className="cx-search">
        <Input placeholder="Search resources, deploys, logs…" iconLeft={<Icon name="search" size={16} className="lead" />} />
      </div>
      <div className="cx-top__right">
        <Tabs
          tabs={[{ value: "prod", label: "Prod" }, { value: "staging", label: "Staging" }]}
          value={env}
          onChange={onEnv}
        />
        <IconButton icon="bell" variant="solid" label="Notifications" />
        <IconButton icon={theme === "light" ? "moon" : "sun"} variant="solid" label="Toggle theme" onClick={onTheme} />
        <IconButton icon="life-buoy" variant="solid" label="Help" />
      </div>
    </header>
  );
}

/* ---------- Login ---------- */
function LoginScreen({ onLogin }) {
  const { Input, Button, Icon } = window.OverModernDesignSystem_22ac94;
  const submit = (e) => { e.preventDefault(); onLogin && onLogin(); };
  return (
    <div className="cx-login">
      <div className="cx-login__grid" />
      <div className="cx-login__aura" />
      <form className="cx-login__card" onSubmit={submit}>
        <div className="cx-login__brand">
          <img src="../../assets/logo-wordmark.svg" alt="OverModern" />
        </div>
        <h2>Welcome back</h2>
        <p className="sub">Sign in to your OverModern workspace.</p>
        <div className="cx-login__fields">
          <Input label="Work email" type="email" placeholder="ada@northwind.io" defaultValue="ada@northwind.io" iconLeft={<Icon name="mail" size={16} className="lead" />} />
          <Input label="Password" type="password" placeholder="••••••••••" defaultValue="supersecret" iconLeft={<Icon name="lock" size={16} className="lead" />} />
          <Button type="submit" variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={17} />} style={{ width: "100%" }}>Sign in</Button>
        </div>
        <div className="cx-divider">or</div>
        <Button variant="secondary" iconLeft={<Icon name="key-round" size={16} />} style={{ width: "100%" }}>Continue with SSO</Button>
        <div className="cx-login__foot">Protected by hardware-key MFA</div>
      </form>
    </div>
  );
}

/* ---------- Overview ---------- */
function AreaChart() {
  const pts = [38, 42, 35, 50, 46, 58, 54, 66, 60, 72, 68, 82, 78, 90];
  const W = 640, H = 188, max = 100;
  const step = W / (pts.length - 1);
  const coords = pts.map((v, i) => [i * step, H - (v / max) * H]);
  const line = coords.map((c, i) => (i ? "L" : "M") + c[0].toFixed(1) + " " + c[1].toFixed(1)).join(" ");
  const area = line + ` L ${W} ${H} L 0 ${H} Z`;
  return (
    <div className="cx-chart">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="cxArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgb(61 130 255 / 0.35)" />
            <stop offset="1" stopColor="rgb(61 130 255 / 0)" />
          </linearGradient>
          <linearGradient id="cxStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3D82FF" />
            <stop offset="1" stopColor="#44DEE6" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="rgb(255 255 255 / 0.05)" strokeWidth="1" />
        ))}
        <path d={area} fill="url(#cxArea)" />
        <path d={line} fill="none" stroke="url(#cxStroke)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx={coords[coords.length - 1][0]} cy={coords[coords.length - 1][1]} r="4" fill="#44DEE6" />
      </svg>
      <div className="cx-chart__axis">
        <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>now</span>
      </div>
    </div>
  );
}

function OverviewScreen() {
  const { Card, Icon, Badge, Button } = window.OverModernDesignSystem_22ac94;
  const stats = [
    { icon: "arrow-up-right", label: "Requests", value: "1.24M", unit: "/min", delta: "+12.4%", up: true },
    { icon: "timer", label: "p99 latency", value: "12.4", unit: "ms", delta: "−3.1%", up: true },
    { icon: "triangle-alert", label: "Error rate", value: "0.02", unit: "%", delta: "+0.01%", up: false },
    { icon: "server", label: "Active nodes", value: "48", unit: "/ 50", delta: "stable", up: true },
  ];
  const regions = [
    { name: "us-east-1", v: 92 }, { name: "eu-west-2", v: 74 },
    { name: "ap-south-1", v: 58 }, { name: "sa-east-1", v: 31 },
  ];
  const deploys = [
    { hash: "a3f9c1", msg: "Add edge cache invalidation", who: "ada", time: "2m ago", state: "success" },
    { hash: "7b2e08", msg: "Bump runtime to v4.2.0", who: "marco", time: "1h ago", state: "success" },
    { hash: "c19df4", msg: "Refactor billing webhooks", who: "lena", time: "3h ago", state: "warning" },
    { hash: "e84a55", msg: "Patch auth token rotation", who: "ada", time: "6h ago", state: "success" },
  ];
  return (
    <div className="cx-content">
      <div className="cx-pagehead">
        <div>
          <h1>Overview</h1>
          <p>Real-time health across all production regions.</p>
        </div>
        <div className="cx-pagehead__actions">
          <Button variant="secondary" iconLeft={<Icon name="download" size={16} />}>Export</Button>
          <Button variant="primary" iconLeft={<Icon name="rocket" size={16} />}>Deploy</Button>
        </div>
      </div>

      <div className="cx-stats">
        {stats.map((s) => (
          <Card key={s.label}>
            <div className="cx-stat__label"><Icon name={s.icon} size={14} />{s.label}</div>
            <div className="cx-stat__value">{s.value}<small> {s.unit}</small></div>
            <div className={"cx-stat__delta " + (s.up ? "cx-up" : "cx-down")}>
              <Icon name={s.up ? "trending-up" : "trending-down"} size={13} />{s.delta}
            </div>
          </Card>
        ))}
      </div>

      <div className="cx-row2">
        <Card variant="glass">
          <div className="cx-panel-title">
            <h3>Request throughput</h3>
            <Badge variant="accent" dot>Live</Badge>
          </div>
          <AreaChart />
        </Card>
        <Card>
          <div className="cx-panel-title"><h3>Traffic by region</h3></div>
          {regions.map((r) => (
            <div className="cx-region" key={r.name}>
              <span className="cx-region__name">{r.name}</span>
              <span className="cx-region__bar"><span className="cx-region__fill" style={{ width: r.v + "%" }} /></span>
              <span className="cx-region__val">{r.v}%</span>
            </div>
          ))}
        </Card>
      </div>

      <Card>
        <div className="cx-panel-title">
          <h3>Recent deployments</h3>
          <Button variant="ghost" size="sm" iconRight={<Icon name="arrow-right" size={15} />}>View all</Button>
        </div>
        {deploys.map((d) => (
          <div className="cx-deploy" key={d.hash}>
            <Icon name="git-commit-horizontal" size={18} style={{ color: "var(--text-tertiary)" }} />
            <div>
              <div className="cx-deploy__msg">{d.msg}</div>
              <div className="cx-deploy__meta">
                <span className="cx-deploy__hash">{d.hash}</span> · pushed by {d.who}
              </div>
            </div>
            <div className="cx-deploy__right">
              <Badge variant={d.state === "warning" ? "warning" : "success"} dot>
                {d.state === "warning" ? "Rolled back" : "Deployed"}
              </Badge>
              <span className="cx-deploy__time">{d.time}</span>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* ---------- Deployments ---------- */
function DeploymentsScreen() {
  const { Card, Icon, Badge, Button, Tabs, Avatar } = window.OverModernDesignSystem_22ac94;
  const [filter, setFilter] = React.useState("all");
  const rows = [
    { hash: "a3f9c1", branch: "main", msg: "Add edge cache invalidation", who: "Ada Mercer", env: "prod", dur: "42s", time: "2m ago", state: "live" },
    { hash: "7b2e08", branch: "main", msg: "Bump runtime to v4.2.0", who: "Marco Vidal", env: "prod", dur: "1m 04s", time: "1h ago", state: "live" },
    { hash: "c19df4", branch: "fix/billing", msg: "Refactor billing webhooks", who: "Lena Cho", env: "staging", dur: "38s", time: "3h ago", state: "failed" },
    { hash: "e84a55", branch: "main", msg: "Patch auth token rotation", who: "Ada Mercer", env: "prod", dur: "51s", time: "6h ago", state: "live" },
    { hash: "12bb90", branch: "exp/edge", msg: "Prototype regional failover", who: "Marco Vidal", env: "staging", dur: "1m 22s", time: "9h ago", state: "building" },
  ];
  const stateMap = { live: ["success", "Live"], failed: ["danger", "Failed"], building: ["accent", "Building"] };
  const shown = rows.filter((r) => filter === "all" || (filter === "prod" ? r.env === "prod" : r.env === "staging"));
  return (
    <div className="cx-content">
      <div className="cx-pagehead">
        <div>
          <h1>Deployments</h1>
          <p>Every build shipped across your environments.</p>
        </div>
        <div className="cx-pagehead__actions">
          <Button variant="secondary" iconLeft={<Icon name="git-branch" size={16} />}>Connect repo</Button>
          <Button variant="primary" iconLeft={<Icon name="rocket" size={16} />}>New deployment</Button>
        </div>
      </div>

      <div style={{ marginBottom: 18 }}>
        <Tabs value={filter} onChange={setFilter} tabs={[
          { value: "all", label: "All", count: rows.length },
          { value: "prod", label: "Production", count: rows.filter(r => r.env === "prod").length },
          { value: "staging", label: "Staging", count: rows.filter(r => r.env === "staging").length },
        ]} />
      </div>

      <Card style={{ padding: 0, overflow: "hidden" }}>
        {shown.map((r, i) => (
          <div className="cx-deploy" key={r.hash} style={{ padding: "16px 20px", borderBottom: i === shown.length - 1 ? "none" : undefined }}>
            <Badge variant={stateMap[r.state][0]} dot>{stateMap[r.state][1]}</Badge>
            <div style={{ marginLeft: 4 }}>
              <div className="cx-deploy__msg">{r.msg}</div>
              <div className="cx-deploy__meta">
                <span className="cx-deploy__hash">{r.hash}</span> · {r.branch} · {r.env}
              </div>
            </div>
            <div className="cx-deploy__right">
              <span className="cx-deploy__time"><Icon name="timer" size={12} style={{ verticalAlign: "-2px", marginRight: 4, color: "var(--text-disabled)" }} />{r.dur}</span>
              <Avatar name={r.who} size="sm" />
              <span className="cx-deploy__time">{r.time}</span>
              <Icon name="ellipsis" size={18} style={{ color: "var(--text-tertiary)", cursor: "pointer" }} />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* ---------- Placeholder ---------- */
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

/* ---------- App orchestrator ---------- */
function App() {
  const DS = window.OverModernDesignSystem_22ac94;
  const [, force] = React.useReducer((x) => x + 1, 0);
  const [authed, setAuthed] = React.useState(false);
  const [nav, setNav] = React.useState("overview");
  const [env, setEnv] = React.useState("prod");
  const [theme, setTheme] = React.useState("dark");

  // Wait for the design-system bundle to finish loading (async via ds-base.js).
  React.useEffect(() => {
    if (!DS) { const t = setTimeout(force, 40); return () => clearTimeout(t); }
  });
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (!DS) return null;

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
if (typeof module !== "undefined" && module.exports) module.exports = { ConsoleApp: App };
